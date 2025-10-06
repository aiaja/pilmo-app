"use client";

import { type Icon } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
    isActive?: boolean;
  }[];
}) {
  const pathname = usePathname();
  const { state, setOpen } = useSidebar();
  useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
              <Link href={item.url}>
                  <div className="flex flex-wrap items-center gap-2 p-4">
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        {/* Logout */}
        <SidebarFooter>
          <Button variant="ghost">
            <LogOut className="h-4 w-4 shrink-0" />
            <span>Logout</span>
          </Button>
        </SidebarFooter>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
