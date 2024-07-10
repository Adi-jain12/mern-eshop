import hero from "../assets/benetton.webp";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        alt="images"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
