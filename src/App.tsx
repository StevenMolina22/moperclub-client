// Sections of the app page 
import "./scss/app.scss";
import Home from "./pages/App/Home";
import Featured from "./pages/App/Featured";
import Events from "./pages/App/Events";
import PersonalMenu from "./pages/App/PersonalMenu";
import Articles from "./pages/App/Articles";
import Footer from "./components/Footer";
import Inspiration from "./pages/App/Inspiration";
// import PopUpForm from "./components/Atoms/SigninForm";

// main app
function App() {
  return (
    <div>
      {/* <PopUpForm /> */}
      <Home />
      <Featured />
      <Events />
      <Inspiration />
      <PersonalMenu />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
