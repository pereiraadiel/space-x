import React from 'react';
import TableRow from '../molecules/tableRow';


type TableProps = {
  headers: string[];
  data: (string | number | React.ReactNode)[][];
};

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='table-body'>
        {data.map((row, index) => (
          <TableRow key={index} data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
