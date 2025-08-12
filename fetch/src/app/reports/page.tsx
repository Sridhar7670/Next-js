'use client';
import { useState } from 'react';
import { createReport } from '../services/api';

import './module.ReportsPage.css';  
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function ReportsPage() {
  const { isAuthenticated } = useAuth();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2020);
  // ... add other state variables for the form ...
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('You must be logged in to create a report.');
      return;
    }
    try {
      const reportData = { make, model, year, price, mileage, lng, lat };
      const result = await createReport(reportData);
      alert('Report created successfully!');
      console.log(result);
    } catch (error: any) {
      alert(error.message);
    }
  };

return (
    <div className="container">
      <h1>Car Reports</h1>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <h2>Create a New Report</h2>

          <label>
            Make:
            <input 
              value={make} 
              onChange={e => setMake(e.target.value)} 
              placeholder="Make" 
            />
          </label>

          <label>
            Model:
            <input 
              value={model} 
              onChange={e => setModel(e.target.value)} 
              placeholder="Model" 
            />
          </label>

          <label>
            Year:
            <input 
              type="number" 
              value={year} 
              onChange={e => setYear(parseInt(e.target.value))} 
              placeholder="Year" 
            />
          </label>

          <label>
            Price:
            <input 
              type="number" 
              value={price} 
              onChange={e => setPrice(parseInt(e.target.value))} 
              placeholder="Price" 
            />
          </label>

          <label>
            Mileage:
            <input 
              type="number" 
              value={mileage} 
              onChange={e => setMileage(parseInt(e.target.value))} 
              placeholder="Mileage" 
            />
          </label>

          <label>
            Longitude:
            <input 
              type="number" 
              value={lng} 
              onChange={e => setLng(parseFloat(e.target.value))} 
              placeholder="Longitude" 
            />
          </label>

          <label>
            Latitude:
            <input 
              type="number" 
              value={lat} 
              onChange={e => setLat(parseFloat(e.target.value))} 
              placeholder="Latitude" 
            />
          </label>

          <button type="submit">Create Report</button>
        </form>
      ) : (
        <p>Please log in to create a report. or <Link href={"/login"} style={{textDecoration:"underline"}}>Click Here</Link></p>
      )}
    </div>
  );

}