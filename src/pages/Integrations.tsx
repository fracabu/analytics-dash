import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

// Integrazioni di esempio
const initialIntegrations = [
  {
    id: 1,
    name: 'Google Analytics',
    status: 'connected',
    lastSync: '2024-03-15 14:30',
    icon: 'https://www.google.com/favicon.ico',
  },
  {
    id: 2,
    name: 'Facebook Ads',
    status: 'connected',
    lastSync: '2024-03-15 14:25',
    icon: 'https://www.facebook.com/favicon.ico',
  },
  {
    id: 3,
    name: 'TikTok Ads',
    status: 'disconnected',
    icon: 'https://www.tiktok.com/favicon.ico',
  },
];

export function Integrations() {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  // Funzione per gestire la connessione
  const handleConnect = (id: number) => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? {
              ...integration,
              status: 'connected',
              lastSync: new Date().toISOString().slice(0, 16).replace('T', ' '), // Data sincronizzazione attuale
            }
          : integration
      )
    );
  };

  // Funzione per gestire la disconnessione
  const handleDisconnect = (id: number) => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === id
          ? { ...integration, status: 'disconnected', lastSync: undefined }
          : integration
      )
    );
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Platform Integrations</h2>
          <div className="space-y-4">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                {/* Icona e nome */}
                <div className="flex items-center space-x-3">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="font-medium">{integration.name}</h3>
                    {integration.lastSync && (
                      <p className="text-sm text-gray-500">
                        Last synced: {integration.lastSync}
                      </p>
                    )}
                  </div>
                </div>

                {/* Stato e pulsanti */}
                <div className="flex items-center space-x-2">
                  {integration.status === 'connected' ? (
                    <>
                      <span className="flex items-center text-green-600">
                        <Check className="w-4 h-4 mr-1" />
                        Connected
                      </span>
                      <button
                        onClick={() => handleDisconnect(integration.id)}
                        className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="flex items-center text-gray-500">
                        <X className="w-4 h-4 mr-1" />
                        Disconnected
                      </span>
                      <button
                        onClick={() => handleConnect(integration.id)}
                        className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        Connect
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
