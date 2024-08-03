import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableContainerProps,
  TableProps,
  TableHeadProps,
} from '@mui/material';

export interface Column {
  field: string;
  headerName: string;
  align?: 'left' | 'right' | 'center';
  width?: string | number;
}

interface DataTableProps<T> {
  columns: Column[];
  data: T[]; // Ensure this is an array
  rowKey?: keyof T;
  renderCell?: (row: T, column: Column) => React.ReactNode;
  tableContainerProps?: TableContainerProps;
  tableProps?: TableProps;
  tableHeadProps?: TableHeadProps;
}

const DataTable = <T,>({
  columns,
  data = [], 
  rowKey,
  renderCell,
  tableContainerProps,
  tableProps,
  tableHeadProps,
}: DataTableProps<T>) => {
  console.log('from t', data);
  
  return (
    <TableContainer component={Paper} {...tableContainerProps}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" {...tableProps}>
        <TableHead {...tableHeadProps}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                align={column.align || 'center'}
                sx={{ 
                  textAlign: column.align || 'center', 
                  width: column.width || 'auto' 
                }}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {Array.isArray(data) && data.map((row) => (
            <TableRow key={row[rowKey as keyof T] as React.Key}>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align || 'center'}
                  sx={{ 
                    textAlign: column.align || 'center', 
                    width: column.width || 'auto' 
                  }}
                >
                  {renderCell ? renderCell(row, column) : (row[column.field as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
