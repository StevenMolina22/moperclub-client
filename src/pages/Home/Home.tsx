// Sections of the app page
import "../../scss/app.scss";
import Hero from "./Hero";
import Featured from "./Featured";
import Events from "./Events";
import PersonalMenu from "./PersonalMenu";
import Articles from "./Articles";
import Footer from "../../components/Footer";
import Inspiration from "./Inspiration";
// import PopUpForm from "./components/Atoms/SigninForm";

// main app
function Home() {
  return (
    <div>
      {/* <PopUpForm /> */}
      <Hero />
      <Featured />
      <Events />
      <Inspiration />
      <PersonalMenu />
      <Articles />
      <Footer />
    </div>
  );
}

export default Home;
