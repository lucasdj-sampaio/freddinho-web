import React, { useState } from 'react';

import { Container, HeaderItem } from './styles';

const TABS = {
  ESCOLAS: 0,
  USUARIOS: 1,
};

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.ESCOLAS);

  return (
    <Container>
      <header>
        <HeaderItem active={activeTab === TABS.ESCOLAS}>Escolas</HeaderItem>
        <HeaderItem active={activeTab === TABS.USUARIOS}>Usuarios</HeaderItem>
      </header>
      {activeTab === TABS.ESCOLAS && <div>escolas caraio</div>}
      {activeTab === TABS.USUARIOS && <div>USUARIOS caraio</div>}
    </Container>
  );
};

export default Tab;
