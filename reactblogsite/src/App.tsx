import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
import { SignInContext } from './Hooks/useContext/SignInContextCreateProvider';

function App() {
  return (
    <div className='App'>
      <SignInContext>
        <div className='siteWrapper'>
          <HeaderWrapper />
          <MainWrapper />
          <FooterWrapper />
        </div>
      </SignInContext>
    </div>
  );
}

export default App;
