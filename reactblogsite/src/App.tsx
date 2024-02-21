import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
import { LogInContextProvider } from './Hooks/Context/UserContextCreateProvider';

function App() {
 


  return (
    <div className='App'>
      <LogInContextProvider>
        <div className='siteWrapper'>
          <HeaderWrapper />
          <MainWrapper />
          <FooterWrapper />
        </div>
      </LogInContextProvider>
    </div>
  );
}

export default App;
