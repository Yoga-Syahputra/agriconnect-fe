const SideBackground = ({ image, title, subtitle }) => (
  <div
    className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative z-10 flex flex-col justify-center items-start pl-16 pr-10 py-8 text-white">
      <h1 className="text-5xl font-extrabold mb-4 leading-snug">
        {title} <br />
        <span className="font-semibold text-[#FFD700]">Bersama Kami.</span>
      </h1>
      <p className="text-lg text-gray-300">{subtitle}</p>
    </div>
  </div>
);

export default SideBackground;
