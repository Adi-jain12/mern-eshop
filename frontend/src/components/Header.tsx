import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-slate-600 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="a1.jpg"
            alt="logo"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
        </Link>

        {/* <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div> */}

        <div>Menu</div>
      </div>
    </div>
  );
};

export default Header;
