import React from 'react';
import { WaterSimulation } from './components/WaterSimulation';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="h-screen flex">
        <WaterSimulation />
      </div>
    </div>
  );
}

export default App;
