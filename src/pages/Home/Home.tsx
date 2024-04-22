// Sections of the app page
import "../../scss/app.scss";
import Hero from "./Hero";
import Featured from "./Featured";
import Events from "./Events";
import PersonalMenu from "./PersonalMenu";
import Articles from "./Articles";
import Footer from "../../components/Layout/Footer";
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
      <Inspiration />
      <Events />
      {/* title text  */}
      <div className=" text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Disfruta de verdad con{" "}
          <span className="text-orange-600">el #1 de Argentina</span> BS.
        </h2>
        <p className="mx-auto w-[70%] text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam
          voluptatem itaque aliquam qui ducimus molestiae reiciendis perferendis
          optio autem.
        </p>
      </div>
      {/* algo extra */}
      <Places />
      <Articles />
      <PersonalMenu />
      <Footer />
    </div>
  );
}

export default Home;
