import React from 'react';
import { Play, Upload, Share2 } from 'lucide-react';

export function QuickStart() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Start Guide</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Play className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">Connect Your Platforms</h3>
            <p className="text-sm text-gray-600">Integrate with 30+ marketing platforms in just a few clicks</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-green-100 p-2 rounded-lg">
            <Upload className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium">Import Your Data</h3>
            <p className="text-sm text-gray-600">Upload custom data via CSV or connect to your data warehouse</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Share2 className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium">Share Reports</h3>
            <p className="text-sm text-gray-600">Collaborate with your team and share insights with stakeholders</p>
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Start Free Trial
      </button>
    </div>
  );
}