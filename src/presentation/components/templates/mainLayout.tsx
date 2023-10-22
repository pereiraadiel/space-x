import React from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

type MainLayoutProps = {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
