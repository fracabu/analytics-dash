import React from 'react';
import { Widget } from '../components/widgets/Widget';
import { QuickStart } from '../components/QuickStart';

const demoWidgets = [
  {
    id: '1',
    type: 'chart',
    title: 'Revenue Overview',
    data: {
      data: [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 2000 },
        { name: 'Apr', value: 2780 },
        { name: 'May', value: 1890 },
        { name: 'Jun', value: 2390 },
      ]
    },
    settings: {
      dimensions: ['date'],
      metrics: ['revenue'],
      chartType: 'line'
    }
  },
  {
    id: '2',
    type: 'metric',
    title: 'Total Conversions',
    data: {
      value: 2547,
      change: 12.5
    },
    settings: {
      metrics: ['conversions'],
      timeframe: 'this_month'
    }
  },
  {
    id: '3',
    type: 'table',
    title: 'Top Campaigns',
    data: {
      rows: [
        { campaign: 'Summer Sale', spend: 1200, conversions: 145, roi: 2.4 },
        { campaign: 'Black Friday', spend: 2500, conversions: 312, roi: 3.1 },
        { campaign: 'Holiday Special', spend: 1800, conversions: 234, roi: 2.8 }
      ]
    },
    settings: {
      dimensions: ['campaign'],
      metrics: ['spend', 'conversions', 'roi']
    }
  }
];

export function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoWidgets.map((widget) => (
          <Widget key={widget.id} widget={widget} />
        ))}
      </div>
      <div className="mt-6">
        <QuickStart />
      </div>
    </main>
  );
}