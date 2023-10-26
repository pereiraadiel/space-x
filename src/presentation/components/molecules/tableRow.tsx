import React from 'react';
import TableCell from '../atoms/tableCell';

type TableRowProps = {
  data: (string | number | React.ReactNode)[];
};

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr>
      {data.map((value, index) => (
        <TableCell key={index} value={value} />
      ))}
    </tr>
  );
};

export default TableRow;
