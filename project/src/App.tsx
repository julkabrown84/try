import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import JobDataAnalyst from './pages/JobDataAnalyst';
import JobApplication from './pages/JobApplication';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <Router>
      <CookieBanner />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/jobs/data-analyst" element={<JobDataAnalyst />} />
          <Route path="/jobs/data-analyst/apply" element={<JobApplication />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;