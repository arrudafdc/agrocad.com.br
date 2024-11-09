import agrocadLogo from "../../assets/logo-agrocad.svg";
import { Home, Fish, User, Tractor, Beef, Milk, LogOut } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink, Outlet } from "react-router-dom";

export function Admin() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex-row p-4">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <img src={agrocadLogo} />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">AgroCad</span>
            <span className="text-sm">Bem-vindo</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                    to=""
                    end
                  >
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                    to="agricultor"
                  >
                    <Tractor className="mr-2 h-4 w-4" />
                    <span>Agricultor</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                    to="pecuarista"
                  >
                    <Beef className="mr-2 h-4 w-4" />
                    <span>Pecuarista</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                    to="pescador"
                  >
                    <Fish className="mr-2 h-4 w-4" />
                    <span>Pescador</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                    to="produtor-leite"
                  >
                    <Milk className="mr-2 h-4 w-4" />
                    <span>Produtor de Leite</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="conta"
                    className="py-5 aria-[current='page']:text-green-600 aria-[current='page']:font-semibold aria-[current='page']:bg-zinc-100"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Usuário</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Olá, João da Silva</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
