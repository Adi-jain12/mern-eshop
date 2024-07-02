import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto flex-1 py-10 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
