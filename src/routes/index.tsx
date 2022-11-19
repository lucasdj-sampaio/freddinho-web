import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdultChat } from '../pages/AdultChat';
import { AdultMenu } from '../pages/AdultMenu';
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
      <Route
        path="/perfis"
        element={<PrivateRoute content={<Profile />}></PrivateRoute>}
      ></Route>
      <Route
        path="/menu"
        element={<PrivateRoute content={<AdultMenu />}></PrivateRoute>}
      ></Route>
      <Route
        path="/chat"
        element={<PrivateRoute content={<AdultChat />}></PrivateRoute>}
      ></Route>
    </Routes>
  );
};

export default CustomRoutes;
