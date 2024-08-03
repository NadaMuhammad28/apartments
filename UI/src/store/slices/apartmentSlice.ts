import { RootState } from '../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Apartment } from '@interfaces/apartment';

interface ApartmentState {
  apartments: Apartment[];
  currentApartment: Apartment | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApartmentState = {
  apartments: [],
  currentApartment: null,
  loading: false,
  error: null,
};

const apartmentSlice = createSlice({
  name: 'apartment',
  initialState,
  reducers: {
    setApartments(state, action: PayloadAction<Apartment[]>) {
      state.apartments = action.payload;
    },
    setCurrentApartment(state, action: PayloadAction<Apartment>) {
      state.currentApartment = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetApartmentState(state) {
      state.apartments = initialState.apartments;
      state.currentApartment = initialState.currentApartment;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
  },
});

export const { setApartments, setCurrentApartment, setLoading, setError, resetApartmentState } = apartmentSlice.actions;

export const apartmentStateSelector = (state: RootState) => state.apartment;

export default apartmentSlice.reducer;
