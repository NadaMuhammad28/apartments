import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Alert,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import { useApartment } from '@hooks/useApartment';
import PageHeader from '@components/common/PageHeader';

const ApartmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    currentApartment: apartment,
    isLoading,
    error,
    fetchApartmentById,
  } = useApartment();

  useEffect(() => {
    if (id) fetchApartmentById(id);
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!apartment) {
    return <Alert severity="warning">Apartment not found.</Alert>;
  }

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
