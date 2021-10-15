import React from 'react';
import Header from 'components/Header/Header';
import './App.scss';
import Sidebar from '../Sidebar/Sidebar';

export const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
    </div>
  );
};
