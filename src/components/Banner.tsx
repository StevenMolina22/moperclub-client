// styles
import "../scss/banner.scss";
import Navbar from "./Navbar";

export default function Banner() {
  // background image
  const bgImage: string =
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <>
      {/* home page*/}
      <section className="home-page" style={bgImageStyle}>
        <div className="banner__img-overlay"></div> {/* opacity img */}
        <Navbar /> {/* navbar component */}
        {/* banner elements */}
        <div className="fluid-container banner">
          <div className="banner__border"></div>
          <div className="text__container banner__text">
            <h2 className="banner__h2 tracking-tight">MOPERCLUB</h2>
            <h4 className="banner__h4 text-center">
              Experiencias Inolvidables
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
