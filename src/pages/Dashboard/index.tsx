import React from 'react';
import createChatbot from '../../services/chatbot';

const MainContent: React.FC = () => {
  createChatbot(window.location.pathname);

  return <div></div>;
};

export default MainContent;
