// src/layouts/LayoutBase.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LayoutBase = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50 p-8 overflow-y-auto h-[calc(100vh-64px)]">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutBase;