import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <div className="flex-1 py-10 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
