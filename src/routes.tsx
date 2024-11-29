import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Reports } from './pages/Reports';
import { Team } from './pages/Team';
import { Integrations } from './pages/Integrations';
import { DataImport } from './pages/DataImport';
import { Settings } from './pages/Settings';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/team" element={<Team />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/data-import" element={<DataImport />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}