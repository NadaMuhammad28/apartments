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





const DataTable = ({
  columns,
  data = [], 
  rowKey,
  renderCell,
  tableContainerProps,
  tableProps,
  tableHeadProps,
}) => {  
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
            <TableRow key={row[rowKey]}>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align || 'center'}
                  sx={{ 
                    textAlign: column.align || 'center', 
                    width: column.width || 'auto' 
                  }}
                >
                  {renderCell ? renderCell(row, column) : (row[column.field ])}
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
