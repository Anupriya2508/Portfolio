// MainContent.js
import React from 'react';
import Left from './Left';
import Right from './Right';
import About from './About';

const MainContent = ({ onScrollToAbout }) => {
  const textToType = "Hello there...I'm Anupriya...";

  return (
    <div className="main-content">
      <Left text={textToType} onScrollToAbout={onScrollToAbout} />
      <Right />
    </div>
  );
}

export default MainContent;
