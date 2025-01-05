import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sprout, 
  Droplets, 
  TestTube2, 
  Bug, 
  Map, 
  LineChart, 
  Bell, 
<<<<<<< HEAD
  Settings,
  MessageSquare,
  X 
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

=======
  Settings 
} from 'lucide-react';

>>>>>>> e5202af4885ef584c97651adf360f35659edf107
const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/' },
  { icon: Sprout, label: 'Crop Health', path: '/crop-health' },
  { icon: Droplets, label: 'Water Levels', path: '/water-management' },
  { icon: TestTube2, label: 'Nutrients', path: '/nutrient-management' },
  { icon: Bug, label: 'Pest Detection', path: '/pest-control' },
  { icon: Map, label: 'Farm Map', path: '/farm-mapping' },
  { icon: LineChart, label: 'Analytics', path: '/analytics' },
<<<<<<< HEAD
  { icon: MessageSquare, label: 'Forum', path: '/forum' },
=======
>>>>>>> e5202af4885ef584c97651adf360f35659edf107
  { icon: Bell, label: 'Alerts', path: '/alerts' },
  { icon: Settings, label: 'Settings', path: '/settings' }
];

<<<<<<< HEAD
export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside className="h-full flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">AgriSmart</h2>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 hover:bg-green-700 rounded-lg lg:hidden"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
=======
export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">AgriSmart</h2>
      </div>
      <nav className="mt-8">
>>>>>>> e5202af4885ef584c97651adf360f35659edf107
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
<<<<<<< HEAD
            onClick={onClose}
=======
>>>>>>> e5202af4885ef584c97651adf360f35659edf107
            className={({ isActive }) => 
              `flex items-center px-6 py-3 text-gray-100 transition-colors ${
                isActive ? 'bg-green-700' : 'hover:bg-green-700'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}