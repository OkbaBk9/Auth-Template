
import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-green-700">Admin Dashboard</h1>
      <div className="mb-8">Welcome, Admin! Manage users and settings here.</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">Users</h3>
          <p>View and manage all users in the system.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">Settings</h3>
          <p>Configure platform settings and permissions.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">Reports</h3>
          <p>See analytics and reports.</p>
        </div>
      </div>
    </div>
  );
}
