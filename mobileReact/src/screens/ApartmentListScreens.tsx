/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { fetchApartments } from '../services/api';

type Apartment = {
  id: number;
  name: string;
  location: string;
  price: number;
};

// Define the type for your navigation parameters
type RootStackParamList = {
  ApartmentDetail: { id: number };
};

export default function ApartmentListScreen() {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Use NavigationProp with your parameter list
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function loadApartments() {
      try {
        const data: Apartment[] = await fetchApartments();
        setApartments(data);
      } catch (err) {
        setError('Failed to load apartments');
      } finally {
        setLoading(false);
      }
    }
    loadApartments();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <FlatList
      data={apartments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ApartmentDetail', { id: item.id })}
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.location}</Text>
          <Text>{`$${item.price}`}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
