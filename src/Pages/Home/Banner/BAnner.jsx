/* eslint-disable react/no-unescaped-entities */
import banner from "../../../assets/bnr.png";
const Banner = () => {
  return (
    <div className="pt-28 bg-red-50">
      <div className="container mx-auto grid grid-cols-3 items-center  gap-5">
        <div className="space-y-8">
          <h1 className="text-[#435585] text-4xl font-bold">Hello!</h1>
          <h1 className="text-6xl font-bold">I'm Jubayer Hossain.</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div>
          <img src={banner} />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-[#435585]">
            Front-End <br /> Developer
          </h1>
          <h2 className="text-3xl font-bold">Experties with </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
