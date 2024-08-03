/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { fetchApartmentById } from '../services/api';

type RootStackParamList = {
  ApartmentDetail: { id: number };
};

type Apartment = {
  id: number;
  name: string;
  location: string;
  price: number;
  description: string;
};

export default function ApartmentDetailScreen() {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const route = useRoute<RouteProp<RootStackParamList, 'ApartmentDetail'>>();
  const { id } = route.params;

  useEffect(() => {
    async function loadApartment() {
      try {
        const data = await fetchApartmentById(id);
        setApartment(data);
      } catch (err) {
        setError('Failed to load apartment details');
      } finally {
        setLoading(false);
      }
    }
    loadApartment();
  }, [id]);

  if (loading) {
    return <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!apartment) {
    return <Text style={styles.error}>No apartment found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{apartment.name}</Text>
      <Text>{apartment.location}</Text>
      <Text>{`$${apartment.price}`}</Text>
      <Text>{apartment.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
