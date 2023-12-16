import About from "../Pages/Home/About/About";
import Banner from "../Pages/Home/Banner/BAnner";
import Services from "../Pages/Home/Services/Services";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default MainLayout;
