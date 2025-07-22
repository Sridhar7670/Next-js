// server.js

const express = require('express');
const app = express();
const PORT = 3050;


const users = [
  { id: 1, name: 'john-the-man', email: 'johnthemanmith@example.com' },
  { id: 2, name: 'Bob', email: 'bobthelegend@example.com' },
  { id: 3, name: 'subbu', email: 'subbuthehero@example.com' }
];


app.get('/api/users', (req, res) => {
  // The res.json() method automatically sets the Content-Type header to application/json
  res.json(users);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});