import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
}