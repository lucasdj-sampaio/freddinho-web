import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PrivateLayout from '../pages/_layouts/private';
import { RootState } from '../store';
interface Props {
  content: React.ReactNode;
}

const PrivateRoute: React.FC<Props> = ({ content }: Props) => {
  const reducer = useSelector((state: RootState) => state.access);

  if (!reducer.userAcess.valid) {
    return <Navigate to={'/'} />;
  }

  return <PrivateLayout mainContent={content}></PrivateLayout>;
};

export default PrivateRoute;
