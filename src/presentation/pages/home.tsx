'use client'
import React from 'react';
import MainLayout from '../components/templates/mainLayout';
import SearchBar from '../components/organisms/searchBar';
import StatusLabel from '../components/atoms/statusLabel';
import Text from '../components/atoms/text'
import ChartWrapper from '../components/organisms/chartWrapper';
import StackedBarChart from '../components/molecules/stackedBarChart';
import PieChart from '../components/molecules/pieChart';

const HomePage = () => {
  const launches = [
    {
      year: '2019',
      rockets: [
        {
        name: 'Rocket Bis',
        count: 1,
        successCount: 1,
      },
        {
        name: 'Rocket Bloom',
        count: 2,
        successCount: 1,
      },
    ]
    },
    {
      year: '2020',
      rockets: [
        {
        name: 'Rocket A',
        count: 1,
        successCount: 0,
      },
        {
        name: 'Rocket Bis',
        count: 3,
        successCount: 3,
      },
    ]
    },
    {
      year: '2021',
      rockets: [{
        name: 'Rocket A',
        count: 2,
        successCount: 2,
      }]
    },
    {
      year: '2022',
      rockets: [{
        name: 'Rocket One',
        count: 2,
        successCount: 1,
      }]
    },
    {
      year: '2023',
      rockets: [
        {
          count: 3,
          successCount: 1,
          name: 'Rocket Soul',
        },
        {
          count: 1,
          successCount: 0,
          name: 'Rocket One',
        },
      ],
    },
  ]

  const rockets = ['Rocket One', 'Rocket A', 'Rocket Bis', 'Rocket Soul', 'Rocket Bloom']
  const rocketsLaunches = rockets.map((rocket) => {
    const {totalLaunches, successTotal} = launches.reduce((acc, launch) => {
      const rocketInfo = launch.rockets.find((r) => r.name === rocket);
      return {
        totalLaunches: acc.totalLaunches + (rocketInfo ? rocketInfo.count : 0),
        successTotal: acc.successTotal + (rocketInfo ? rocketInfo.successCount : 0)
      }
    }, {totalLaunches: 0, successTotal: 0});
  
    return { name: rocket, count: totalLaunches, successCount: successTotal };
  });
  
  return (
    <MainLayout>
      
      <ChartWrapper 
        barData={launches} 
        pieData={rocketsLaunches} 
        barTitle='Lançamentos por ano' 
        pieTitle='Lançamentos de foguetes'
        categories={rockets}
      />
      <Text variant='subtitle' value='Registros de lançamentos'/>
      <SearchBar onChange={() => {}} onSubmit={() => {}} value=''/>
      <StatusLabel status='success'/>
      <StatusLabel status='fail'/>
    </MainLayout>
  );
};

export default HomePage;
