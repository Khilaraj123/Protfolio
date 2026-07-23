import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import '../../styles/CVContainer.css';

export default function CVContainer() {
  return (
    <div className="cv-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}