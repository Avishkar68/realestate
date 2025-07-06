import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Info from './pages/Info';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Layout from './Layout';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="explore" element={<Explore />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;