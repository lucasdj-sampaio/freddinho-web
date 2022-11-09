import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { LeftContent, RightContent } from '../pages/Login';
import Dashboard from '../pages/Dashboard';

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
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            subtitle="Selecione uma das opções abaixo:"
            content={<Dashboard />}
          ></PrivateRoute>
        }
      ></Route>
      <Route
        path="/gestao"
        element={<PrivateRoute subtitle="" content={<></>}></PrivateRoute>}
      ></Route>
      <Route
        path="/registro-excecao"
        element={<PrivateRoute subtitle="" content={<></>}></PrivateRoute>}
      ></Route>
      <Route
        path="/relatorios"
        element={<PrivateRoute subtitle="" content={<></>}></PrivateRoute>}
      ></Route>
    </Routes>
  );
};

export default CustomRoutes;
