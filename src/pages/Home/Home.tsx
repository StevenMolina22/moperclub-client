// Sections of the app page
import "../../scss/app.scss";
import Hero from "./Hero";
import Featured from "./Featured";
import Events from "./Events";
import PersonalMenu from "./PersonalMenu";
import Articles from "./Articles";
import Footer from "../../components/Footer";
import Inspiration from "./Inspiration";
import Places from "./Places";
// import PopUpForm from "./components/Atoms/SigninForm";

// main app
function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* <PopUpForm /> */}
      <Hero />
      <Featured />
      <Events />
      <Inspiration />
      <PersonalMenu />
      <Places />
      <Articles />
      <Footer />
    </div>
  );
}

export default Home;
