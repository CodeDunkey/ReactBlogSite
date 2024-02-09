import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Site/Header/HeaderWrapper';
import { MainWrapper } from './Site/Main/MainWrapper';
function App() {
  return (
    <div className='App'>
      <div className='siteWrapper'>
        <HeaderWrapper />
        <MainWrapper />
        
      </div>
    </div>
  );
}

export default App;
