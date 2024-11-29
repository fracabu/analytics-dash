import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

// Array di report con URL di esempio
const reports = [
  {
    id: 1,
    name: 'Monthly Performance Report',
    date: '2024-03-01',
    type: 'PDF',
    url: '/files/monthly-performance.pdf',
  },
  {
    id: 2,
    name: 'Campaign Analytics',
    date: '2024-03-05',
    type: 'CSV',
    url: '/files/campaign-analytics.csv',
  },
  {
    id: 3,
    name: 'ROI Analysis',
    date: '2024-03-10',
    type: 'PDF',
    url: '/files/roi-analysis.pdf',
  },
];

export function Reports() {
  const [downloading, setDownloading] = useState<number | null>(null);

  // Funzione per gestire il download
  const handleDownload = async (report: typeof reports[0]) => {
    try {
      setDownloading(report.id); // Imposta lo stato di caricamento
      const response = await fetch(report.url);

      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Crea un elemento <a> per avviare il download
      const a = document.createElement('a');
      a.href = url;
      a.download = `${report.name}.${report.type.toLowerCase()}`;
      a.click();

      // Revoca l'URL per evitare perdite di memoria
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file:', error);
      alert('Failed to download the file. Please try again later.');
    } finally {
      setDownloading(null); // Reset dello stato di caricamento
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                {/* Informazioni sul report */}
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-sm text-gray-500">
                      Generated on {report.date}
                    </p>
                  </div>
                </div>

                {/* Pulsante di download */}
                <button
                  onClick={() => handleDownload(report)}
                  className={`flex items-center space-x-2 px-3 py-2 text-sm ${
                    downloading === report.id
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-600 hover:bg-blue-50'
                  } rounded-lg`}
                  disabled={downloading === report.id}
                >
                  {downloading === report.id ? (
                    <span>Downloading...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download {report.type}</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
