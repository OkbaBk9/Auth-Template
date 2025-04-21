
import React from "react";

export default function DelegateDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-green-700">Delegate Dashboard</h1>
      <div className="mb-8">Hello, Delegate! Access information about your responsibilities.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">My Delegation</h3>
          <p>Track tasks and represent your class.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">Events</h3>
          <p>See upcoming meetings and school events.</p>
        </div>
      </div>
    </div>
  );
}
