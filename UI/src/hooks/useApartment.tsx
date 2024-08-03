'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllApartments,
  getApartmentById,
  addApartment,
} from '../services/api/apartments';
import {
  setApartments,
  setCurrentApartment,
  setLoading,
  setError,
  apartmentStateSelector,
} from '../store/slices/apartmentSlice';
import {
  addApartmentSchema,
  ApartmentSchema,
} from '../schemas/apartment.schema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Apartment } from '../interfaces/apartment';
import { useNavigate } from 'react-router-dom';

export const useApartment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apartments, currentApartment, loading, error } = useSelector(
    apartmentStateSelector
  );
  const [localError, setLocalError] = useState<string | null>(null);

  const form = useForm<ApartmentSchema>({
    mode: 'onChange',
    resolver: zodResolver(addApartmentSchema),
  });

  const fetchApartments = async () => {
    try {
      dispatch(setLoading(true));
      const apartments = await getAllApartments();
      if (apartments.data.data) dispatch(setApartments(apartments.data.data));
    } catch (error) {
      dispatch(setError('Failed to fetch apartments.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchApartmentById = async (id: string) => {
    const currentId = Number(id);
    try {
      dispatch(setLoading(true));
      const apartment = await getApartmentById(currentId);
      if (apartment.data.data)
        dispatch(setCurrentApartment(apartment.data.data));
    } catch (error) {
      dispatch(setError('Failed to fetch apartment details.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const onSubmit: SubmitHandler<ApartmentSchema> = async (data) => {
    const payload: Apartment = { ...data, price: +data.price };
    try {
      await addApartment(payload);
      navigate('/');
    } catch (error) {
      console.error('Failed to add apartment:', error);
      setLocalError('Failed to add apartment. Please try again.');
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
    onSubmit,
    form,
  };
};
