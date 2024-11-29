import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;