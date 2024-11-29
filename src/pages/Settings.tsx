import React from 'react';
import { Save } from 'lucide-react';

export function Settings() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Dashboard Settings</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Branding</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Logo URL
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter logo URL"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Theme Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Color
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 p-1 rounded-lg border"
                    defaultValue="#2563eb"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Secondary Color
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 p-1 rounded-lg border"
                    defaultValue="#4b5563"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Accent Color
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 p-1 rounded-lg border"
                    defaultValue="#8b5cf6"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm text-gray-700">Enable email notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm text-gray-700">Auto-refresh dashboard data</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm text-gray-700">Show help tooltips</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}