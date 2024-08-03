"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useApartment } from "../../../hooks/useApartment";
import {
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import PageHeader from '@/components/PageHeader';

const ApartmentDetails = () => {
  const {
    currentApartment: apartment,
    isLoading,
    error,
    fetchApartmentById,
  } = useApartment();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchApartmentById(id);
    }
  }, []);

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  if (!apartment) return <p>No apartment found</p>;

  return (
    <>
      <PageHeader title={apartment.name} showbutton={false} />
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            Location: {apartment.location}
          </Typography>
          <Typography variant="h6" component="div">
            Price: ${apartment.price}
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 2 }}>
            {apartment.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ApartmentDetails;
