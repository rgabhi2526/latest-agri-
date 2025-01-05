import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import Overview from '../pages/Overview';
import CropHealthPage from '../pages/CropHealthPage';
import WaterManagement from '../pages/WaterManagement';
import NutrientManagement from '../pages/NutrientManagement';
import PestControl from '../pages/PestControl';
import FarmMapping from '../pages/FarmMapping';
import Analytics from '../pages/Analytics';
import Alerts from '../pages/Alerts';
import Settings from '../pages/Settings';
import Weather from '../pages/Weather'; // Import the Weather page

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: '/crop-health',
        element: <CropHealthPage />,
      },
      {
        path: '/water-management',
        element: <WaterManagement />,
      },
      {
        path: '/nutrient-management',
        element: <NutrientManagement />,
      },
      {
        path: '/pest-control',
        element: <PestControl />,
      },
      {
        path: '/farm-mapping',
        element: <FarmMapping />,
      },
      {
        path: '/analytics',
        element: <Analytics />,
      },
      {
        path: '/alerts',
        element: <Alerts />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
    ],
  },
]);
