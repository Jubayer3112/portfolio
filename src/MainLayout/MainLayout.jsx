import About from "../Pages/Home/About/About";
import Banner from "../Pages/Home/Banner/BAnner";
import Contact from "../Pages/Home/Contact/Contact";
import Portfolio from "../Pages/Home/Portfolio/Portfolio";
import Resume from "../Pages/Home/Resume/Resume";
import Services from "../Pages/Home/Services/Services";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

export default MainLayout;
