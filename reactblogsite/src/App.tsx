import React from 'react';
import './App.scss';
import { AppRoutes } from './Pages/Routes';
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
                  <AppRoutes/>
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
