// AdminDashboard.jsx
import React from "react";
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  
  

  

  return (
    <div>
      <AdminSidebar />
    </div>
  );
};

export default AdminDashboard;

  