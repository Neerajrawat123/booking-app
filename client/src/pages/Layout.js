import { Outlet } from "react-router-dom";
import Header from "../components/header";

function Layout() {
  return (
    <div className=" flex fsds flex-col min-h-screen  mx-auto ">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
