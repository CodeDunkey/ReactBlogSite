import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
function App() {
  return (
    <div className='App'>
      <div className='siteWrapper'>
        <HeaderWrapper />
        <MainWrapper />
        <FooterWrapper />
      </div>
    </div>
  );
}

export default App;
