import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
import { UserContextProvider } from './Hooks/Context/UserContextCreateProvider';
import { LogInSignUpContextProvider } from './Hooks/Context/LogInSignUpContextCreateProvider';
import { BlogContextProvider } from './Hooks/Context/BlogContextProvider';
function App() {



  return (
    <div className='App'>
      <LogInSignUpContextProvider>
        <UserContextProvider>
          <BlogContextProvider>
            <div className='siteWrapper'>
              <HeaderWrapper />
              <MainWrapper />
              <FooterWrapper />
            </div>
          </BlogContextProvider>
        </UserContextProvider>
      </LogInSignUpContextProvider>
    </div>
  );
}

export default App;
