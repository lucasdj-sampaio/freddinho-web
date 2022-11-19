import React from 'react';

interface Props {
  mainContent: React.ReactNode;
}

const PrivateLayout: React.FC<Props> = ({ mainContent }: Props) => {
  return <>{mainContent}</>;
};

export default PrivateLayout;
