import React from 'react';
import { useSelector } from 'react-redux';
import { LeftContent, RightContent } from '../pages/Login';
import PrivateLayout from '../pages/_layouts/private';
import { RootState } from '../store';
import PublicRoute from './PublicRoute';

interface Props {
  content: React.ReactNode;
  subtitle: string;
}

const PrivateRoute: React.FC<Props> = ({ subtitle, content }: Props) => {
  const reducer = useSelector((state: RootState) => state.useracess);

  return (
    <>
      {reducer.userAcess.valid ? (
        <PrivateLayout
          subtitle={subtitle}
          mainContent={content}
        ></PrivateLayout>
      ) : (
        <PublicRoute
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        ></PublicRoute>
      )}
    </>
  );
};

export default PrivateRoute;
