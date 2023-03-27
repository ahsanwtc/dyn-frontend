import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import { GlobalStyle } from './styles/globalStyles';
import { lightTheme } from './styles/theme';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
              
        <UserContext.Provider value={value}>
        <Routes>
            <Route  path="/" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        </UserContext.Provider>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
