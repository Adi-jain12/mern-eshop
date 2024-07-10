import maleImage from "../assets/MaleModel.webp";
import femaleImage from "../assets/FemaleModel.webp";
import kidImage from "../assets/KidsModel.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[70px] my-5">
        <span className="font-poppins font-bold">WELCOME TO</span>&nbsp;
        <span className="font-playfair">BENETTON INDIA</span>
      </span>
      <div className="flex justify-between items-center py-5 my-5 w-full">
        <Link to="/men">
          <img src={maleImage} alt="men" className="object-contain" />
        </Link>
        <Link to="/women">
          <img src={femaleImage} alt="women" className="object-contain" />
        </Link>
        <Link to="/kids">
          <img src={kidImage} alt="kid" className="object-contain" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
