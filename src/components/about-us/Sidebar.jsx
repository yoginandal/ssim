"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, BookOpen, Users, Calendar, Settings } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BookOpen, label: "About Us", href: "/about" },
  { icon: Users, label: "Faculty", href: "/faculty" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: Settings, label: "Contact", href: "/contact" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-2xl font-bold">SSIM</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
