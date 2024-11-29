import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PieChart, Settings, Users, FileSpreadsheet, Share2 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Reports', icon: PieChart, path: '/reports' },
  { name: 'Team', icon: Users, path: '/team' },
  { name: 'Integrations', icon: Share2, path: '/integrations' },
  { name: 'Data Import', icon: FileSpreadsheet, path: '/data-import' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="bg-white w-64 border-r border-gray-200 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <PieChart className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Analytics Pro</span>
        </div>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 ${
                isActive ? 'bg-blue-50 text-blue-600' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}