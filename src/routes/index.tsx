import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { LeftContent, RightContent } from '../pages/Login';
import { Profile } from '../pages/Profiles';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute
            leftContent={<LeftContent />}
            rightContent={<RightContent />}
          ></PublicRoute>
        }
      ></Route>
      <Route path="/profiles" element={<Profile />}></Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            subtitle="Selecione uma das opções abaixo:"
            content={<Dashboard />}
          ></PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default CustomRoutes;
