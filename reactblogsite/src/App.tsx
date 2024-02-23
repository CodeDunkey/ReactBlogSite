import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
import { UserContextProvider } from './Hooks/Context/UserContextCreateProvider';
import { LogInSignUpContextProvider } from './Hooks/Context/LogInSignUpContextCreateProvider';
function App() {



  return (
    <div className='App'>
      <LogInSignUpContextProvider>
        <UserContextProvider>
          <div className='siteWrapper'>
            <HeaderWrapper />
            <MainWrapper />
            <FooterWrapper />
          </div>
        </UserContextProvider>
      </LogInSignUpContextProvider>
    </div>
  );
}

export default App;
