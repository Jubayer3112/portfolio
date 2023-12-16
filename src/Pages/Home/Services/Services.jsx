import responsive from "../../../assets/responsive.svg";
import version from "../../../assets/version.svg"
import ServiceCard from "./ServiceCard";
import performance from "../../../assets/performance.svg"

const Services = () => {
  return (
    <div>
      <div>
        <div>
          <div className="bg-gray-200 px-2 py-10">
            <div id="features" className="mx-auto max-w-6xl">
              <p className="text-center text-base font-semibold leading-7 text-primary-500">
                Services
              </p>
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Writing has never been so easy
              </h2>
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <ServiceCard
                  image={responsive}
                  title="Responsive design"
                  body="the cutting-edge language model that makes interactions a breeze. With
          its user-friendly interface, effortlessly tap into the world of
          AI-generated text."
                />
                <ServiceCard
                  image={version}
                  title="Version Control"
                  body="the cutting-edge language model that makes interactions a breeze. With
          its user-friendly interface, effortlessly tap into the world of
          AI-generated text."
                />
                <ServiceCard
                  image={performance}
                  title="Performance Monitoring"
                  body="the cutting-edge language model that makes interactions a breeze. With
          its user-friendly interface, effortlessly tap into the world of
          AI-generated text."
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
