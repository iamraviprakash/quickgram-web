import React from 'react';
import { Sidebar } from '../Components';

const RootComponent = () => {
  return (
    <div className="grid grid-cols-[480px_1fr] h-screen font-sans">
      <Sidebar />
      <div className="h-screen bg-neutral-100"></div>
    </div>
  );
};

export default RootComponent;
