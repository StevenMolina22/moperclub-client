// styles
import "../../scss/banner.scss";

// banner components types definition
interface Props {
  bgImage: string;
  titleText: string;
  subtitleText?: string;
  navbar?: React.ReactNode
}

export default function Banner({ bgImage, titleText, subtitleText, navbar }: Props) {
  // Banner Hero background image
  const bgImageStyle = {
    backgroundImage: `url(${bgImage})`,
  };
  // returned component
  return (
    <>
      {/* Home/Banner section wrapper*/}
      <section className="home-page" style={bgImageStyle}>
        <div className="banner__img-overlay"></div> {/* opacity img */}
        {/* Navbar component: (for it to be transparent and show bg image) */}
        {navbar} 
        {/* Baner centered elements/ Call to action */}
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
