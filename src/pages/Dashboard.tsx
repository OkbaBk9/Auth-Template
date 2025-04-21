
import React, { useState } from "react";
import RoleLayout from "@/components/RoleLayout";
import AdminDashboard from "@/components/AdminDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import DelegateDashboard from "@/components/DelegateDashboard";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Teacher", value: "teacher" },
  { label: "Delegate", value: "delegate" },
] as const;

export default function DashboardPage() {
  const [role, setRole] = useState<"admin" | "teacher" | "delegate">("admin");

  let dashboard = null;
  switch (role) {
    case "admin":
      dashboard = <AdminDashboard />;
      break;
    case "teacher":
      dashboard = <TeacherDashboard />;
      break;
    case "delegate":
      dashboard = <DelegateDashboard />;
      break;
    default:
      dashboard = null;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4 bg-white border-b">
        <label className="font-semibold mr-2">Switch role:</label>
        <select
          className="border px-2 py-1 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value as "admin" | "teacher" | "delegate")}
        >
          {roles.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>
      <RoleLayout role={role}>{dashboard}</RoleLayout>
    </div>
  );
}
