import React from 'react';
import PrivateLayout from '../pages/_layouts/private';

interface Props {
  content: React.ReactNode;
  subtitle: string;
}

const PublicRoute: React.FC<Props> = ({ subtitle, content }: Props) => {
  return (
    <PrivateLayout subtitle={subtitle} mainContent={content}></PrivateLayout>
  );
};

export default PublicRoute;
