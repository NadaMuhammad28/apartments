import { Apartment } from '@interfaces/apartment';
import { ApiResponse } from './types';
import { Axios } from '@services/axios';
import { AxiosResponse } from 'axios';

export const getAllApartments = async (): Promise<AxiosResponse< ApiResponse<Apartment[]>>> => {
  return (Axios.get('/apartments'));
};

export const getApartmentById = async (id: number): Promise<AxiosResponse<ApiResponse<Apartment>>> => {
  return (Axios.get(`/apartments/${id}`));
};

export const addApartment = async (apartment: Apartment): Promise<ApiResponse<{ apartmentId: number }>> => {
  return Axios.post('/apartments/add', apartment);
};
