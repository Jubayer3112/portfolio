import Skill from "./skill";
import AboutImg from "../../../assets/about.png";
const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex gap-20 items-center ">
          <div className="w-1/2">
            <img src={AboutImg} alt="" />
          </div>
          <div className="w-3/5 space-y-10">
            <div>
              <h1 className="text-5xl font-bold text-[#435585]">About Me</h1>
              <p className="w-[500px]">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p  className="w-[500px]">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="w-[500px] ">
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
