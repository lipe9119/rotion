import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function Default() {
  return (
    <div className="flex h-screen w-screen text-rotion-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}
