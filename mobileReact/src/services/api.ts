/* eslint-disable prettier/prettier */
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export async function fetchApartments() {
  const response = await axios.get(`${API_BASE_URL}/apartments`);
  return response.data.data;
}

export async function fetchApartmentById(id: number) {
  const response = await axios.get(`${API_BASE_URL}/apartments/${id}`);
  return response.data;
}
