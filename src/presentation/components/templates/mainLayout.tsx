import React from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

type MainLayoutProps = {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='main-layout'>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
