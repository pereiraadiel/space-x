'use client'
import React from 'react';
import MainLayout from '../components/templates/mainLayout';
import SearchBar from '../components/organisms/searchBar';
import StatusLabel from '../components/atoms/statusLabel';

const HomePage = () => {
  return (
    <MainLayout>
      <SearchBar onChange={() => {}} onSubmit={() => {}} value=''/>
      <StatusLabel status='success'/>
      <StatusLabel status='fail'/>
    </MainLayout>
  );
};

export default HomePage;
