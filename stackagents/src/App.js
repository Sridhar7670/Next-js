import React from 'react';

import './App.css';
import Main from './components/Main/main.js';
import Footer from './components/Footer/footer.js';
import  Header  from './components/Header/header.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;