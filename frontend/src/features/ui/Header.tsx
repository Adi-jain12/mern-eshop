import { Link } from 'react-router-dom';
import {
	HiMagnifyingGlass,
	HiHeart,
	HiShoppingBag,
	HiUser,
} from 'react-icons/hi2';

const Header = () => {
	return (
		// <header className="absolute top-0 left-0 w-full text-white hover:bg-slate-200 hover:text-black">
		<header className="border-b-2 border-b-orange-500 py-1">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/">
					<img
						src="a1.jpg"
						alt="logo"
						className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
					/>
				</Link>

				<div className="w-[400px] flex justify-between items-center font-bold text-sm font-poppins">
					<Link to="/women">Women</Link>
					<Link to="/kids">Kids</Link>
					<Link to="/sale">Sale</Link>
					<Link to="/men">Men</Link>
					<Link to="/men">Men</Link>
					<Link to="/men">Men</Link>
					<Link to="/men">Men</Link>
				</div>
				{/* <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div> */}

				<div className="w-[250px] flex justify-between items-center font-poppins">
					<Link to="/menu">
						<HiMagnifyingGlass />
					</Link>
					<Link to="/profile">
						<HiUser />
					</Link>
					<Link to="/menu">
						<HiHeart />
					</Link>
					<Link to="/menu">
						<HiShoppingBag />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
