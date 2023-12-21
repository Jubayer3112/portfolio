/* eslint-disable react/prop-types */
import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import pet from "../../../assets/pet.png";
import car from "../../../assets/car.png";
import lib from "../../../assets/lib.png";
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                   Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  My Recent Projects
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                {/* <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={lib}
              category="Library management"
              title="Library Management – Library Managing"
              description="Key Features :
               User Account Registration, Login and Log out
               User can borrow book
               Add new book and Update book
              Technologies : Mongo DB – Express JS – React JS – Node JS – Firebase – Tailwind CSS"
              live="https://cooperative-fact.surge.sh/"
              client="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Jubayer3112"
              server="https://github.com/Porgramming-Hero-web-course/b8a11-server-side-Jubayer3112"
              id="modal_1"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={car}
              category="Rental"
              title="Car Rental – Rental based"
              description="Key Features :
               User Account Registration, Login and Log out
               Add new car and update data
               To see car details Login required
              Technologies : Mongo DB – Express JS – React JS – Node JS – Firebase – Tailwind CSS"
              live="https://car-rent-bb8ae.web.app/"
              client="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-Jubayer3112"
              server="https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-Jubayer3112"
              id="modal_2"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={pet}
              category="Donation"
              title="Pet Adoption – Donation based"
              description="Key Features :
               User Account and Dashboard Management
               Donation System Implementation
               Admin Panel Development
              Technologies : Mongo DB – Express JS – React JS – Node JS – Firebase – Tailwind CSS"
              live="https://heavy-shape.surge.sh/"
              client="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-Jubayer3112"
              server="https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-Jubayer3112"
              id="modal_3"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
