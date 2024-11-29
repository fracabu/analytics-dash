import React from 'react';
import { MoreVertical, Maximize2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Widget as WidgetType } from '../../types/dashboard';

interface WidgetProps {
  widget: WidgetType;
}

export function Widget({ widget }: WidgetProps) {
  const renderContent = () => {
    switch (widget.type) {
      case 'chart':
        return (
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={widget.data.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case 'metric':
        return (
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-gray-900">{widget.data.value}</div>
            <div className={`text-sm mt-1 ${widget.data.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {widget.data.change >= 0 ? '↑' : '↓'} {Math.abs(widget.data.change)}%
            </div>
          </div>
        );
      case 'table':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {Object.keys(widget.data.rows[0]).map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {widget.data.rows.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value: any, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-2 text-sm text-gray-900">
                        {typeof value === 'number' ? value.toLocaleString() : value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{widget.title}</h3>
          <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Maximize2 className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {renderContent()}
      </div>
    </div>
  );
}