'use client'
import React from 'react';
import MainLayout from '../components/templates/mainLayout';
import SearchBar from '../components/organisms/searchBar';

const HomePage = () => {
  return (
    <MainLayout>
      <SearchBar onChange={() => {}} onSubmit={() => {}} value=''/>
    </MainLayout>
  );
};

export default HomePage;
