'use client'; // Ensure this is at the top of your file

import { useState,  } from 'react';
import { useRouter } from 'next/navigation'; 
import {
  getAllApartments,
  getApartmentById,
  addApartment,
} from '../services/api';


export const useApartment = () => {
  const router = useRouter(); 

  const [apartments, setApartments] = useState([]);
  const [currentApartment, setCurrentApartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localError, setLocalError] = useState(null);

  
  const fetchApartments = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getAllApartments();
      if (response.data) {
        setApartments(response.data);
        
      }
    } catch (error) {
      setError('Failed to fetch apartments.');
    } finally {
      setLoading(false);
    }
  };

  const fetchApartmentById = async (id) => {
    const currentId = Number(id);
    setLoading(true);
    setError(null);
    try {
      const response = await getApartmentById(currentId);
      if (response.data) {
        setCurrentApartment(response.data);
      }
    } catch (error) {
      setError('Failed to fetch apartment details.');
    } finally {
      setLoading(false);
    }
  };


  return {
    apartments,
    currentApartment,
    isLoading: loading,
    error,
    localError,
    fetchApartments,
    fetchApartmentById,

  };
};
