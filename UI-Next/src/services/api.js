import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getAllApartments = async () => {
  const response = await axios.get(`${API_BASE_URL}/apartments`);
  return response.data;
};

export const getApartmentById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/apartments/${id}`);
  return response.data;
};

export const addApartment = async (apartment) => {
  const response = await axios.post(`${API_BASE_URL}/apartments/add`, apartment);
  return response.data;
};
