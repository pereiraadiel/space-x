import React from 'react';

type TableCellProps = {
  value: string | number | React.ReactNode;
};

const TableCell: React.FC<TableCellProps> = ({ value }) => {
  return <td>{value}</td>;
};

export default TableCell;
