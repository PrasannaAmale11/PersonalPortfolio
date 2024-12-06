import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import Auth from '../components/auth/Auth';

// Auth component wrapper to handle query parameters
const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  
  return <Auth code={code} />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The route path should not include the query parameters */}
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;