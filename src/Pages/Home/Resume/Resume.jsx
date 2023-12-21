import resume from "../../../assets/banner.png";
import Education from "./Education";
import Experience from "./Experience";
const Resume = () => {
  return (
    <div id="resume" className="bg-base-200 py-20">
        
      <div className="container mx-auto">
        <div>
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  My Resume
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Explore My Resume
                </h2>
               
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 items-center">
          <div>
            <img src={resume} alt="" />
          </div>
          <div className="space-y-20">
            <div>
              <h1 className="text-3xl mb-10">Work Experience</h1>
              <div className="space-y-8">
                <Experience
                  jobTitle="Wordpress Web Instructor"
                  company="Sorobindu "
                  address=" Dinajpur"
                  type="Fulltime"
                  time="November 2019 - Present"
                />
              </div>
            </div>

            <div className="mb-">
              <h1 className="text-3xl mb-10">Education</h1>
              <div className="space-y-4">
                <Education
                  degree="Bachelor in Food Engineering"
                  university="Jashore University of Science and Technology"
                  address="San Francisco"
                  time="January 2020 - Present"
                />
                <Education
                  degree="Higher Secondary Certificate"
                  university="HM High School & Collage"
                  address="Sardagonj ,Kashimpur, Gazipur"
                  time="January 2016 - April 2018"
                />
                <Education
                  degree="Secondary School Certificate"
                  university="HM High School & Collage"
                  address="Sardagonj ,Kashimpur, Gazipur"
                  time="January 2014 - April 2016"
                />
              </div>

              <div className="mt-14 flex gap-5">
                <button className="btn btn-outline btn-primary">
                  Contact Me
                </button>
                <button className="btn btn-active btn-primary">
                  <a href="../../../assets/Jubayers-Resume.pdf" download>Download Resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
