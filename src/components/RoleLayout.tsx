
import React, { useState } from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { User, Users, Settings, LayoutDashboard } from "lucide-react";

const links = {
  admin: [
    { title: "Dashboard", icon: LayoutDashboard, url: "#" },
    { title: "Manage Users", icon: Users, url: "#" },
    { title: "Settings", icon: Settings, url: "#" }
  ],
  teacher: [
    { title: "Dashboard", icon: LayoutDashboard, url: "#" },
    { title: "My Classes", icon: Users, url: "#" },
    { title: "Profile", icon: User, url: "#" }
  ],
  delegate: [
    { title: "Dashboard", icon: LayoutDashboard, url: "#" },
    { title: "My Delegation", icon: Users, url: "#" },
    { title: "Profile", icon: User, url: "#" }
  ]
};

export default function RoleLayout({ role, children }: { role: "admin" | "teacher" | "delegate", children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader>
            <div className="text-xl font-bold text-green-600 px-2 pt-3">Jam3ia</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-green-500">{role.charAt(0).toUpperCase() + role.slice(1)} Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {links[role].map(link => (
                    <SidebarMenuItem key={link.title}>
                      <SidebarMenuButton asChild>
                        <a href={link.url} className="flex items-center gap-2">
                          <link.icon />
                          <span>{link.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="text-xs px-2 text-gray-400">&copy; 2025 Jam3ia</div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
