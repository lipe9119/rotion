import * as Collapsible from "@radix-ui/react-collapsible";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Default() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  return (
    <Collapsible.Root
      className="flex h-screen w-screen text-rotion-100"
      defaultOpen
      onOpenChange={setisSidebarOpen}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
