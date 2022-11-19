import React from 'react';

interface Props {
  subtitle?: string;
  mainContent: React.ReactNode;
}

const PrivateLayout: React.FC<Props> = ({ subtitle, mainContent }: Props) => {
  return (
    <div>
      <h1>{subtitle}</h1>
      {mainContent}
    </div>
  );
};

export default PrivateLayout;
