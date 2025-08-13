'use client';
import { useState } from 'react';
import { createReport } from '../services/api';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function ReportsPage() {
  const { isAuthenticated } = useAuth();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2020);
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('You must be logged in to create a report.');
      return;
    }
    
    setIsLoading(true);
    setSuccess(false);
    
    try {
      const reportData = { make, model, year, price, mileage, lng, lat };
      const result = await createReport(reportData);
      setSuccess(true);
      console.log(result);
      // Reset form
      setMake('');
      setModel('');
      setYear(2020);
      setPrice(0);
      setMileage(0);
      setLng(0);
      setLat(0);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fade-in" style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'var(--foreground)',
      }}>
        🚗 Car Reports
      </h1>
      
      {isAuthenticated ? (
        <div className="card">
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            color: 'var(--foreground)',
          }}>
            Create a New Report
          </h2>

          {success && (
            <div style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>
              ✅ Report created successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Make:
                </label>
                <input
                  className="input"
                  value={make}
                  onChange={e => setMake(e.target.value)}
                  placeholder="e.g., Toyota"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Model:
                </label>
                <input
                  className="input"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  placeholder="e.g., Camry"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Year:
                </label>
                <input
                  className="input"
                  type="number"
                  value={year}
                  onChange={e => setYear(parseInt(e.target.value))}
                  placeholder="2020"
                  min="1900"
                  max="2025"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Price ($):
                </label>
                <input
                  className="input"
                  type="number"
                  value={price}
                  onChange={e => setPrice(parseInt(e.target.value))}
                  placeholder="25000"
                  min="0"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Mileage:
                </label>
                <input
                  className="input"
                  type="number"
                  value={mileage}
                  onChange={e => setMileage(parseInt(e.target.value))}
                  placeholder="50000"
                  min="0"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Longitude:
                </label>
                <input
                  className="input"
                  type="number"
                  value={lng}
                  onChange={e => setLng(parseFloat(e.target.value))}
                  placeholder="-122.4194"
                  step="any"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--foreground)',
                  fontWeight: '500',
                }}>
                  Latitude:
                </label>
                <input
                  className="input"
                  type="number"
                  value={lat}
                  onChange={e => setLat(parseFloat(e.target.value))}
                  placeholder="37.7749"
                  step="any"
                  required
                />
              </div>
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                marginTop: '2rem',
                padding: '1rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              {isLoading && <div className="loading-spinner"></div>}
              {isLoading ? 'Creating Report...' : '📝 Create Report'}
            </button>
          </form>
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--foreground)',
          }}>
            Authentication Required
          </h2>
          <p style={{
            color: 'var(--muted-foreground)',
            marginBottom: '1.5rem',
          }}>
            Please log in to create a report.
          </p>
          <Link href="/login" className="btn btn-primary">
            🔑 Login
          </Link>
        </div>
      )}
    </div>
  );
}