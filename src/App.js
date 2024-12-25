import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
// import EditMovie from './pages/EditMovie';
import Navbar from '../src/component/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        {/* <Route path="/edit/:id" element={<EditMovie />} /> */}
      </Routes>
    </div>
  );
};

export default App;
