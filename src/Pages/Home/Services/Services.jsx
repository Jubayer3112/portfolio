import responsive from "../../../assets/responsive.svg";
import version from "../../../assets/version.svg"
import ServiceCard from "./ServiceCard";
import performance from "../../../assets/performance.svg"

const Services = () => {
  return (
    <div id="services">
      <div>
        <div>
          <div className="bg-gray-200 px-2 py-10">
            <div id="features" className="mx-auto max-w-6xl">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Services
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  What Services I Provide
                </h2>
                
              </div>
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <ServiceCard
                  image={responsive}
                  title="Responsive design"
                  body="In a world dominated by diverse devices, responsive design is the key to ensuring your digital presence shines on every screen. It's not just about fitting content into different sizes; it's about creating an immersive and consistent user experience, whether your audience."
                />
                <ServiceCard
                  image={version}
                  title="Version Control"
                  body="In the ever-evolving world of software development, version control is the linchpin that keeps projects organized, collaborative, and error-resistant. It's the art of tracking changes, coordinating work among multiple developers, and ensuring the stability of your codebase."
                />
                <ServiceCard
                  image={performance}
                  title="Performance Monitoring"
                  body="In the fast-paced digital landscape, user expectations are higher than ever. Performance monitoring is the unsung hero that ensures your applications and websites not only load quickly but provide a seamless and delightful experience throughout a user's journey. "
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
