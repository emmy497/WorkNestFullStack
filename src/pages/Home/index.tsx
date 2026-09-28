import Footer from "../../components/Footer";
import Cta from "./Cta";
import Faq from "./Faq";
import Header from "./Header";
import HowSection from "./HowSection";
import OpenThisWeek from "./OpenThisWeek";
import SuccessStories from "./SuccessStories";
import Testimonies from "./Testimonies";

const Home = () => {
  return (
    <>
      <Header />
      <HowSection />
      <OpenThisWeek />
      <SuccessStories />
      <Testimonies />
      <Faq/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;
