import React from 'react';
import Card from '../atoms/card';

type CardWrapperProps = {
  data: (string | number | React.ReactNode)[][];
};

const CardWrapper: React.FC<CardWrapperProps> = ({ data }) => {
  return data.map((item, index) => <Card key={index} data={item}/>)
};

export default CardWrapper;
