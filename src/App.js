import React from 'react';
import './style.css';
import Sidebar from './components/Sidebar';
import { Home, Lists, Notification, Stories, Write } from './pages/index';
import { Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/Write" element={<Write />} exact />
        <Route path="/lists" element={<Lists />} exact />
        <Route path="/notification" element={<Notification />} exact />
        <Route path="/stories" element={<Stories />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}
