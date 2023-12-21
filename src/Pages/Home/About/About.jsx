import Skill from "./skill";
import AboutImg from "../../../assets/about.png";
const About = () => {
  return (
    <div id="about" className="py-20">
      <div className="container mx-auto">
        <div className="flex gap-20 items-center ">
          <div className="w-1/2">
            <img src={AboutImg} alt="" />
          </div>
          <div className="w-3/5 space-y-10">
            <div>
              <h1 className="text-5xl font-bold text-[#435585] mb-3">About Me</h1>
              <p className="w-[500px]">
              Hello, I'm Jubayer Hossain, a passionate React developer dedicated to crafting elegant and efficient user interfaces. With a strong foundation in front-end development, I thrive on turning complex ideas into clean, maintainable, and scalable code.
              </p>
              <p  className="w-[500px]">
              My journey with React began with a curiosity for creating dynamic and responsive web applications. Over time, I've honed my skills in leveraging the power of React to build seamless user experiences. 
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
