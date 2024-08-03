import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '@components/common/Table';
import { useApartment } from '@hooks/useApartment';
import { CircularProgress, Alert, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ApartmentList() {
  const { apartments, isLoading, error, fetchApartments } = useApartment();
  const navigate = useNavigate();

  useEffect(() => {
    fetchApartments(); // Fetch apartments when the component mounts
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'location', headerName: 'Location' },
    { field: 'price', headerName: 'Price' },
    { field: 'view', headerName: 'View', width: 100 }, // New column for the view icon
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
              onClick={() => navigate(`${row.id}`)}
            >
              <VisibilityIcon />
            </IconButton>
          );
        }

        return (
          <span>
            {row[column.field as keyof typeof row]}
          </span>
        );
      }}
    />
  );
}
