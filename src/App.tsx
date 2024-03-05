// App.tsx
import "./scss/app.scss";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
// import Gallery from "./components/Gallery";
import IconMenu from "./components/IconMenu";
import Footer from "./components/Footer";
import ImagesIcons from "./components/ImagesIcons";
import FeaturedSection from "./components/FeaturedSection";
import InteractiveCards from "./components/InteractiveCards";
// import PopUpForm from "./components/Atoms/SigninForm";

function App() {
  return (
    <div>
      {/* <PopUpForm /> */}
      <Banner />
      <Slider />
      <InteractiveCards />
      <FeaturedSection />
      <IconMenu />
      <ImagesIcons />
      <Footer />
    </div>
  );
}

export default App;
