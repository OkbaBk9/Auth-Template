
import React from "react";

export default function TeacherDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-green-700">Teacher Dashboard</h1>
      <div className="mb-8">Greetings, Teacher! Here’s your classes and student info.</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">My Classes</h3>
          <ul className="list-disc list-inside text-sm">
            <li>6th Grade Biology</li>
            <li>8th Grade Physics</li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border">
          <h3 className="font-semibold text-lg mb-2">Reminders</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Parent meeting Friday</li>
            <li>Grades due by 27th April</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
