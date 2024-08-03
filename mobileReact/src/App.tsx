import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ApartmentListScreen from './screens/ApartmentListScreens';
import ApartmentDetailScreen from './screens/ApartmentDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ApartmentList">
        <Stack.Screen
          name="ApartmentList"
          component={ApartmentListScreen}
          options={{title: 'Apartments'}}
        />
        <Stack.Screen
          name="ApartmentDetail"
          component={ApartmentDetailScreen}
          options={{title: 'Apartment Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
