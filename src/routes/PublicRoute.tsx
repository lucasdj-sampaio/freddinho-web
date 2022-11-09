import React from 'react';
import PublicLayout from '../pages/_layouts/public';

interface Props {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const PublicRoute: React.FC<Props> = ({ leftContent, rightContent }: Props) => {
  return (
    <PublicLayout
      leftContent={leftContent}
      rightContent={rightContent}
    ></PublicLayout>
  );
};

export default PublicRoute;
