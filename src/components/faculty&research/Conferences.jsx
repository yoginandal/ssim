import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

const ConferenceContent = () => {
  const [activeSection, setActiveSection] = useState("about-ssim");

  const menuItems = [
    {
      id: "about-ssim",
      title: "ABOUT SSIM",
      content: {
        heading: "About Siva Sivani Institute of Management",
        text: "Siva Sivani Institute of Management (SSIM) is an autonomous B-School established in 1992 duly approved by All India Council for Technical Education (AICTE) and the first standalone B-School in both the Telugu speaking state. SSIM is accredited by the prestigious international agency South Asian Quality Assurance System (SAQS), as well as accredited by National Agencies like: NBA for PGDM Program, NAAC offering PGDM, PGDM-BIFS and PGDM-BA. The institute has a rich tradition of pursuing academic excellence and overall personal growth."
      }
    },
    {
      id: "about-conference",
      title: "ABOUT THE CONFERENCE",
      content: {
        heading: "About The Conference",
        text: "International Conference on Industry 5.0 - Business with Purpose"
      }
    },
    {
      id: "themes",
      title: "THEMES FOR SAMAROH 2025",
      content: {
        heading: "Conference Themes",
        text: "Exploring the future of Industry 5.0"
      }
    },
    {
      id: "conference-note",
      title: "CONFERENCE NOTE",
      content: {
        heading: "Conference Note",
        text: "Important information about the conference"
      }
    },
    {
      id: "publishing",
      title: "PUBLISHING OPPORTUNITIES",
      content: {
        heading: "Publishing Opportunities",
        text: "Learn about publishing opportunities"
      }
    },
    {
      id: "registration",
      title: "ONLINE REGISTRATION",
      content: {
        heading: "Online Registration",
        text: "Register for the conference"
      }
    }
  ];

  const activeContent = menuItems.find(item => item.id === activeSection)?.content;

  return (
    <div className="flex min-h-screen">
      <Sidebar className="w-64 sticky top-0 left-0 z-0 border-r bg-[#42389D] text-white">
        <SidebarHeader className="p-4 border-b">
          <h2 className="text-xl font-bold text-center">
            SAMAROH 2025
          </h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full px-4 py-2 text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-white text-[#42389D] font-semibold"
                      : "hover:bg-[#5448c8] text-white"
                  }`}
                >
                  {item.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#42389D] mb-8">
            SAMAROH 2025 - International Conference on Industry 5.0 - Business with Purpose
          </h1>
          
          {activeContent && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#42389D] mb-4">
                {activeContent.heading}
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {activeContent.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const Conferences = () => {
  return (
    <SidebarProvider>
      <ConferenceContent />
      <SidebarTrigger className="fixed top-4 right-4 lg:hidden" />
    </SidebarProvider>
  );
};

export default Conferences;
