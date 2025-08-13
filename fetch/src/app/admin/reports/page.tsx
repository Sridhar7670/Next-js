'use client';

import { useState, useEffect } from 'react';
import { getAllReports, approveReport } from '../../services/api';
import { useAuth } from '@/context/AuthContext';

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
    return (
      <div className="fade-in" style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>
            Authentication Required
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }}>
            You must be logged in to view this page.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fade-in" style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          color: 'var(--foreground)',
        }}>
          <div className="loading-spinner"></div>
          Loading reports...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fade-in" style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--destructive)', marginBottom: '1rem' }}>
            Error Loading Reports
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'var(--foreground)',
      }}>
        ⚙️ Admin - Manage Reports
      </h1>

      {reports.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem' }}>
            No Reports Found
          </h2>
          <p style={{ color: 'var(--muted-foreground)' }}>
            There are currently no reports to manage.
          </p>
        </div>
      ) : (
        <div className="card">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>
                      <div>
                        <div style={{ fontWeight: '600' }}>
                          {report.make} {report.model}
                        </div>
                        <div style={{ 
                          fontSize: '0.875rem', 
                          color: 'var(--muted-foreground)' 
                        }}>
                          {report.year}
                        </div>
                      </div>
                    </td>
                    <td style={{ fontWeight: '600' }}>
                      ${report.price.toLocaleString()}
                    </td>
                    <td>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        background: report.approved ? 'var(--accent)' : '#f59e0b',
                        color: 'white',
                      }}>
                        {report.approved ? '✅ Approved' : '⏳ Pending'}
                      </span>
                    </td>
                    <td>
                      <button
                        className={report.approved ? 'btn btn-secondary' : 'btn btn-primary'}
                        onClick={() => handleApprovalToggle(report.id, report.approved)}
                        style={{
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                        }}
                      >
                        {report.approved ? '❌ Reject' : '✅ Approve'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}