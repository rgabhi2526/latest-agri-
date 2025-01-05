import React from 'react';
import CropHealth from '../components/Dashboard/CropHealth';
import WaterLevels from '../components/Dashboard/WaterLevels';
import NutrientLevels from '../components/Dashboard/NutrientLevels';
import PestDetection from '../components/Dashboard/PestDetection';
import FarmMap from '../components/Dashboard/FarmMap';
import ActionableInsights from '../components/Dashboard/ActionableInsights';

export default function Overview() {
  return (
    <div className="p-4">
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <CropHealth />
        </div>
        <WaterLevels />
        <NutrientLevels />
        <div className="sm:col-span-2 lg:col-span-1">
          <PestDetection />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <FarmMap />
        </div>
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CropHealth />
        <WaterLevels />
        <NutrientLevels />
        <PestDetection />
        <FarmMap />
>>>>>>> e5202af4885ef584c97651adf360f35659edf107
        <ActionableInsights />
      </div>
    </div>
  );
}