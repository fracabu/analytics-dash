import React, { useState } from 'react';
import { Upload, FileSpreadsheet, AlertCircle } from 'lucide-react';

export function DataImport() {
  // Stato per il file selezionato e gli import recenti
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [recentImports, setRecentImports] = useState([
    { name: 'campaign_data.csv', status: 'successful', time: '2 hours ago' },
    { name: 'metrics_march.csv', status: 'failed', time: '1 day ago' },
  ]);

  // Funzione per gestire il caricamento del file
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Simula il caricamento del file
  const handleImport = () => {
    if (!selectedFile) return;

    // Simula un caricamento
    const newImport = {
      name: selectedFile.name,
      status: Math.random() > 0.5 ? 'successful' : 'failed', // Random success or failure
      time: 'Just now',
    };

    setRecentImports([newImport, ...recentImports]); // Aggiorna gli import recenti
    setSelectedFile(null); // Resetta il file selezionato
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Import Data</h2>

          {/* Sezione per il caricamento del file */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Drop your CSV file here</h3>
                <p className="text-sm text-gray-500 mt-1">or click to browse</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleFileUpload}
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                {selectedFile ? selectedFile.name : 'Select File'}
              </label>
              {selectedFile && (
                <button
                  onClick={handleImport}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Import File
                </button>
              )}
            </div>
          </div>

          {/* Sezione degli import recenti */}
          <div className="mt-8">
            <h3 className="font-medium mb-4">Recent Imports</h3>
            <div className="space-y-3">
              {recentImports.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <FileSpreadsheet className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Imported {item.time}</p>
                    </div>
                  </div>
                  <span
                    className={`text-sm flex items-center ${
                      item.status === 'successful'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {item.status === 'successful' ? (
                      <>Successful</>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Failed
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
