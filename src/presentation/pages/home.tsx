/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import MainLayout from '../components/templates/mainLayout';
import SearchBar from '../components/organisms/searchBar';
import StatusLabel from '../components/atoms/statusLabel';
import Text from '../components/atoms/text'
import ChartWrapper from '../components/organisms/chartWrapper';
import useRocket from '../../infra/hooks/useRocket';
import useLaunch from '../../infra/hooks/useLaunch';
import { Launch } from '../../infra/interfaces/launch';
import Table from '../components/organisms/table';
import Pagination from '../components/atoms/pagination';
import CardWrapper from '../components/molecules/cardWrapper';

const HomePage = () => {
  
  const { rockets } = useRocket()
  const { launchesResponse, getLaunchesResponse } = useLaunch();
  const [launches, setLaunches] = useState<Launch[]>([])

  useEffect(() => {
    
  }, [])

  const headers = ['Nº Vôo', 'Logo', 'Missão', 'Data de Lançamento', 'Foguete', 'Resultado', 'Video'];
  const data = [
    [
      123,
      <img key='' src='https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png' alt=''/>,
     'Missão one',
     new Date().toLocaleDateString('pt-BR'),
     'Falcon 1',
     <StatusLabel status='success' key=''/>,
     <a key='a' href='https://youtube.com/link'target='_blank' rel='noreferrer noopener'>
        <img src='/assets/yt.png' alt='YouTube Logo'/>
     </a>
    ],
    [
      234,
      <img key='' src='https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png' alt=''/>,
      'Missão Two',
      new Date().toLocaleDateString('pt-BR'),
      'Falcon 1',
      <StatusLabel status='success' key=''/>,
      <a key='a' href='https://youtube.com/link'target='_blank' rel='noreferrer noopener'>
       <img src='/assets/yt.png' alt='YouTube Logo'/>
     </a>
    ],
  ]

  const rocketsLaunches = rockets.map((rocket) => {
    const {totalLaunches, successTotal} = launches.reduce((acc, launch) => {
      const rocketInfo = launch.rocket.find((r) => r.name === rocket.id);
      return {
        totalLaunches: acc.totalLaunches + (rocketInfo ? rocketInfo.count : 0),
        successTotal: acc.successTotal + (rocketInfo ? rocketInfo.successCount : 0)
      }
    }, {totalLaunches: 0, successTotal: 0});
  
    return { name: rocket.name, count: totalLaunches, successCount: successTotal };
  });
  
  return (
    <MainLayout>
      
      <ChartWrapper 
        barData={launches} 
        pieData={rocketsLaunches} 
        barTitle='Lançamentos por ano' 
        pieTitle='Lançamentos de foguetes'
        categories={rockets.map(r => r.name)}
      />
      <Text variant='subtitle' value='Registros de lançamentos'/>
      <SearchBar onChange={() => {}} onSubmit={() => {}} value=''/>

      <Table
        data={data}
        headers={headers}
      />
      <CardWrapper data={data}/>
      <Pagination currentPage={3} totalPages={4} onPageChange={() => {}}/>
    </MainLayout>
  );
};

export default HomePage;
