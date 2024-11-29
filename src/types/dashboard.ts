export interface Widget {
  id: string;
  type: 'chart' | 'metric' | 'table';
  title: string;
  data: any;
  settings: {
    dimensions?: string[];
    metrics?: string[];
    chartType?: string;
    timeframe?: string;
  };
}

export interface Integration {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  lastSync?: Date;
}

export interface DashboardSettings {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo?: string;
  companyName: string;
}