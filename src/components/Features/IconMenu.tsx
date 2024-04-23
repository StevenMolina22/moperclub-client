import "../../scss/IconMenu.scss";
import { IconCard } from "../Common/Cards/IconCard";

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

export default function IconMenu({ title, subtitle, cards }: Props) {
  return (
    
    <div>
      {/* Link for the font*/}
      
      {/* ----- ICON MENU WRAPPER ----- */}
      <section
        className="personal-menu p-3"
        style={{ backgroundColor: "#112" }}
      >
        {/* Title Text */}
        <div className="text__container pt-5 text-center text-gray-100">
          <h2 className="text__h2 text-5xl font-semibold">{title}</h2>
          <h4 className="text__h4 text-3xl font-normal text-gray-300">
            {subtitle}
          </h4>
        </div>

        {/* icon cards wrapper */}

        <div className="flex flex-col md:flex-row justify-center items-center py-6">
          {/* personal-menu__card */}
          {cards.map((card, index) => (
            <IconCard key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
