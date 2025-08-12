'use client';

import { useState, useEffect } from 'react';
import { getAllReports, approveReport } from '../../services/api';
import { useAuth } from '@/context/AuthContext';


// Define a type for our report for better type safety
interface Report {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  approved: boolean;
}

export default function AdminReportsPage() {
  const { isAuthenticated } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchReports = async () => {
        try {
          setLoading(true);
          const data = await getAllReports();
          // The backend returns an object, so we convert it to an array
          console.log(data)
          setReports(Object.values(data)); 
          setError(null);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchReports();
    }
  }, [isAuthenticated]);

  const handleApprovalToggle = async (reportId: string, currentStatus: boolean) => {
    try {
      const updatedReport = await approveReport(reportId, !currentStatus);
      // Update the state locally to reflect the change immediately in the UI
      setReports(prevReports =>
        prevReports.map(report =>
          report.id === reportId ? { ...report, approved: updatedReport.approved } : report
        )
      );
    } catch (err: any) {
      alert(`Failed to update report: ${err.message}`);
    }
  };

  if (!isAuthenticated) {
    return <p>You must be logged in to view this page.</p>;
  }

  if (loading) {
    return <p>Loading reports...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin - Manage Reports</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#eee' ,color:"black"}}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Make & Model</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{report.make} {report.model} ({report.year})</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${report.price.toLocaleString()}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', color: report.approved ? 'green' : 'orange' }}>
                {report.approved ? 'Approved' : 'Pending'}
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button onClick={() => handleApprovalToggle(report.id, report.approved)}>
                  {report.approved ? 'Reject' : 'Approve'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}