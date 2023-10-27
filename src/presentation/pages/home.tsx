/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import MainLayout from '../components/templates/mainLayout';
import { debounce } from 'lodash'
import Text from '../components/atoms/text'
import ChartWrapper from '../components/organisms/chartWrapper';
import useRocket from '../../infra/hooks/useRocket';
import useLaunch from '../../infra/hooks/useLaunch';
import Table from '../components/organisms/table';
import Pagination from '../components/atoms/pagination';
import CardWrapper from '../components/molecules/cardWrapper';
import { convertDataToChartMapper } from '../../domain/mappers/convertDataToChart.mapper';
import { convertLaunchesToTableData } from '../../domain/mappers/convertLaunchesToTableData.mapper';
import FilterBar from '../components/organisms/filterBar';


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  const { rockets, getRockets } = useRocket()
  const { launchesStats, getLaunchesStats, getLaunchesResponse, launchesResponse } = useLaunch()
 
  useEffect(() => {
    getRockets()
    getLaunchesStats()
    getLaunchesResponse({
      limit: 5,
      page: 1,
      search: searchTerm
    })
  }, [])

  const getLaunchesPage = debounce((page: number) => {
    setCurrentPage(page)
    getLaunchesResponse({
      page: currentPage,
      limit: 5,
      search: searchTerm
    })
  }, 200);

  let launches = launchesResponse ? launchesResponse.results : []
  if(filter !== null) {
    launches = launches.filter((launch) => {
      return launch.success === (filter === 'true')
    });
  }

  const handleSearch =  (event: React.FormEvent) => {
    event.preventDefault();
    
    getLaunchesPage(currentPage);
  }

  const headers = ['Nº Vôo', 'Logo', 'Missão', 'Data de Lançamento', 'Foguete', 'Resultado', 'Video'];
  const data = convertLaunchesToTableData(launches)

  const rocketsLaunches = convertDataToChartMapper(rockets, launchesStats)
  
  return (
    <MainLayout>
      
      <ChartWrapper 
        barData={
          launchesStats.sort(
            (a,b) => Number(a.year) - Number(b.year)
        )} 
        pieData={rocketsLaunches} 
        barTitle='Lançamentos por ano' 
        pieTitle='Lançamentos de foguetes'
        categories={rockets.map(r => r.name)}
      />
      <Text 
        variant='subtitle' 
        value='Registros de lançamentos'
      />
      <FilterBar 
        onChange={(e) => setSearchTerm(e.target.value)}
        onSelect={(option) => setFilter(option !== null ? option.value : option)}
        onSubmit={handleSearch}
        searchTerm={searchTerm}
      />

      <Table
        data={data}
        headers={headers}
      />
      <CardWrapper data={data}/>
      <Pagination 
        currentPage={currentPage} 
        totalPages={launchesResponse?.totalPages || 1} 
        onPageChange={getLaunchesPage}
      />
    </MainLayout>
  );
};

export default HomePage;
