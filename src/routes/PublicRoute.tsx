import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PublicLayout from '../pages/_layouts/public';
import { RootState } from '../store';

interface Props {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const PublicRoute: React.FC<Props> = ({ leftContent, rightContent }: Props) => {
  const reducer = useSelector((state: RootState) => state.access);

  if (reducer.userAcess.valid) {
    return <Navigate to={'/perfis'} />;
  }

  return (
    <PublicLayout
      leftContent={leftContent}
      rightContent={rightContent}
    ></PublicLayout>
  );
};

export default PublicRoute;
