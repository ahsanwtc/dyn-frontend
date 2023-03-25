import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import { GlobalStyle } from './styles/globalStyles';
import { lightTheme } from './styles/theme';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  const theme = lightTheme;
  const user = null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
              
        <Routes>
          <Route  path="/" element={user ? <Profile /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
