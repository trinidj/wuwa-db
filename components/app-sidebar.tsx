import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Home, Sword, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navHeader: { title: "Tethys Hub", icon: "/assets/The_Black_Shores_Emblem.png" },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home
    },
    {
      title: "Resonators",
      url: "/resonators",
      icon: User
    },
    {
      title: "Weapons",
      url: "/weapons",
      icon: Sword
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { navHeader, navMain } = data

  return (
    <Sidebar {...props} collapsible="offcanvas">
      <SidebarHeader className="p-4">
        <div className="flex h-fit items-center gap-2">                      
          <Image 
            src={navHeader.icon} 
            alt="Tethys Hub" 
            width={35} 
            height={35} 
          />
          
          <span className="text-xl font-semibold">{navHeader.title}</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link 
                    href={item.url}
                    className="font-semibold text-lg"
                  >
                    <item.icon />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
