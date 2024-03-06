import "../scss/IconMenu.scss";
// media
import { ArrowUpOnSquareStackIcon } from "@heroicons/react/24/solid";

// icon card type definition 
interface IconCard {
  title: string;
  body: string;
  icon: string;
}

// icon menu props type definition
interface Props {
  title: string;
  subtitle: string;
  cards: IconCard[];
}
export default function IconMenu( {title, subtitle, cards}: Props) {
  return (
    <div>
      {/* icon links */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* title text  */}
      <div className="mb-9 text-center">
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

      {/* icon menu wrapper */}
      <section
        className="personal-menu p-3"
        style={{ backgroundColor: "#112" }}
      >
        {/* inner title text */}
        <div className="text__container pt-5 text-center text-gray-100">
          <h2 className="text__h2 text-5xl font-semibold">{title}</h2>
          <h4 className="text__h4 text-3xl font-normal text-gray-300">
            {subtitle}
          </h4>
        </div>
        {/* lower links */}
        <div className="company-menu ">
          {/* icon card */}
          <a
            className="bg_links company-menu__social company-menu__app1"
            href="https://www.youtube.com"
            target="_blank"
          >
            <span className="info-icon">
              <ArrowUpOnSquareStackIcon className="h-6 w-6" />
            </span>
          </a>
          {/* lower link */}
          <a
            className="bg_links company-menu__social company-menu__app2"
            href="https://www.instagram.com"
            target="_blank"
          >
            <span className="info-icon">
              <ArrowUpOnSquareStackIcon className="h-6 w-6" />
            </span>
          </a>
          {/* lower link */}
          <a
            className="bg_links company-menu__social company-menu__app3"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <span className="info-icon">
              <ArrowUpOnSquareStackIcon className="h-6 w-6" />
            </span>
          </a>
          {/* main lower link (show/hide) */}
          <a className="bg_links company-menu__logo">
            <i className="bi bi-three-dots"></i>
          </a>
        </div>
        {/* end company-menu */}

        {/* icon cards wrapper */}
        
        <div className="personal-menu__content ">
          {/* personal-menu__card */}
          {cards.map((card) => (
          <div className="personal-menu__card">
            <div className="info-icon">
              <i className="material-icons md-36">{card.icon}</i>
            </div>
            <p className="personal-menu__title">{card.title}</p>
            <p className="personal-menu__text">
              {card.body}
            </p>
          </div>
        ))}
          {/* end personal-menu__card */}
        </div>
      </section>
    </div>
  );
}
