// styles
import "../../scss/banner.scss";
import Navbar from "./Navbar";

// banner components types definition
interface Props {
  bgImage: string;
  titleText: string;
  subtitleText: string;
}

export default function Banner({ bgImage, titleText, subtitleText }: Props) {
  // background image
  // const bgImage: string =
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };
  // messages text
  // const titleText: string = "MOPERCLUB";
  // const subtitleText: string = "Experiencias Inolvidables";
  // returned component
  return (
    <>
      {/* home page component*/}
      <section className="home-page" style={bgImageStyle}>
        <div className="banner__img-overlay"></div> {/* opacity img */}
        <Navbar /> {/* navbar component */}
        {/* banner elements */}
        <div className="fluid-container banner">
          <div className="banner__border"></div>
          <div className="text__container banner__text">
            <h2 className="banner__h2 tracking-tight">{titleText}</h2>
            <h4 className="banner__h4 text-center">{subtitleText}</h4>
          </div>
        </div>
      </section>
    </>
  );
}
