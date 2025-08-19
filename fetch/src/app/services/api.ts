const API_BASE_URL = 'https://full-stack-app-8v1u.onrender.com'; // NestJS backend URL
// const API_BASE_URL='http://localhost:3001'

// A helper function to get the JWT token from browser storage
const getToken = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('jwt_token') : null;
};

// --- AUTHENTICATION ---

// export const signUp = async (credentials: any) => {
//   const response = await fetch(`${API_BASE_URL}/auth/signup`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });
//   if (!response.ok) throw new Error('Failed to sign up ');
//   return response.json();
// };

export const signUp = async (credentials: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  let data;
  try {
    data = await response.json(); // Attempt to parse response body
    console.log(data)
  } catch (err) {
    // If parsing fails, return a generic error
    throw new Error('Unexpected error occurred');
  }

  if (!response.ok) {
    // Throw the backend error message if available
    const errorMessage = data.message || 'Failed to sign up';
    throw new Error(errorMessage);
  }

  return data;
};

// export const LoggedIn = async (credentials: any) => {
//   const response = await fetch(`${API_BASE_URL}/auth/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });
//   if (!response.ok) throw new Error('Invalid credentials ');
//   return response.json();
// };

// in apis.ts
export const LoggedIn = async (credentials: any) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json(); 

    // Create a custom error object that mimics the structure axios uses.
    // This makes it perfectly compatible with your component's error handling.
    const error: any = new Error(errorData.message || 'An error occurred');
    error.response = { data: errorData }; // Attach the response data
    
    // Throw this new, more detailed error.
    throw error;
  }

  // If the response IS okay, return the JSON body as before.
  return response.json();
};

// --- REPORTS ---

export const createReport = async (reportData: any) => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify(reportData),
  });
  if (!response.ok) throw new Error('Failed to create report');
  return response.json();
};

export const getEstimate = async (params: any) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE_URL}/reports?${query}`);
  if (!response.ok) throw new Error('Failed to get estimate');
  return response.json();
};

export const approveReport = async (id: string, approved: boolean) => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/reports/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Send the token
    },
    body: JSON.stringify({ approved }),
  });
  if (!response.ok) throw new Error('Failed to approve report');
  return response.json();
};


export const getAllReports = async () => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found.');

  const response = await fetch(`${API_BASE_URL}/reports/all`, { 
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error('Failed to fetch reports');
  return response.json();
};