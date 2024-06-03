import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/Footer';
import TopNavRoute from './components/route ';

function App() {
  return (
    <div className="container-fluid p-0">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        
        <Header />
        <TopNavRoute />
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
