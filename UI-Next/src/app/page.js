'use client'; 
import React, { useEffect } from 'react';
import { useApartment } from '@/hooks/useApartment';
import { useRouter } from 'next/navigation';
import DataTable from '@/components/table';
import { CircularProgress, Alert, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

const ApartmentList = () => {
  const { apartments, isLoading, error, fetchApartments } = useApartment();
  const router = useRouter();

  useEffect(() => {
    fetchApartments(); 
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'location', headerName: 'Location' },
    { field: 'price', headerName: 'Price' },
    { field: 'view', headerName: 'View', width: 100 }, 
  ];

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <DataTable
      columns={columns}
      data={apartments}
      rowKey="id"
      renderCell={(row, column) => {
        if (column.field === 'view') {
          return (
            
            <IconButton
              color="primary"
              onClick={() => router.push(`/apartments/${row.id}`)}
            >
              {/* <Link href={`/apartments/${row.id}`}> */}
              <VisibilityIcon />
              {/* </Link> */}
            </IconButton>
          );
        }

        return (
          <span>
            {row[column.field]}
          </span>
        );
      }}
    />
  );
}

export default ApartmentList;
