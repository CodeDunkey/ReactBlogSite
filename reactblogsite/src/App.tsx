import React from 'react';
import './App.scss';
import { HeaderWrapper } from './Components/Site/Header/HeaderWrapper/HeaderWrapper';
import { MainWrapper } from './Components/Site/Main/MainWrapper';
import { FooterWrapper } from './Components/Site/Footer/FooterWrapper';
import { UserContextProvider } from './Hooks/Context/createContext.Provider/UserContextProvider';
import { LogInSignUpContextProvider } from './Hooks/Context/createContext.Provider/LogInSignUpContextCreateProvider';
import { BlogContextProvider } from './Hooks/Context/createContext.Provider/BlogContextProvider';
import { PostContextProvider } from './Hooks/Context/createContext.Provider/PostContextProvider';
import { CommentContextProvider } from './Hooks/Context/createContext.Provider/CommentContextProvider';
function App() {



  return (
    <div className='App'>
      <LogInSignUpContextProvider>
        <UserContextProvider>
          <BlogContextProvider>
            <PostContextProvider>
              <CommentContextProvider>
                <div className='siteWrapper'>
                  <HeaderWrapper />
                  <MainWrapper />
                  <FooterWrapper />
                </div>
              </CommentContextProvider>
            </PostContextProvider>
          </BlogContextProvider>
        </UserContextProvider>
      </LogInSignUpContextProvider>
    </div>
  );
}

export default App;
