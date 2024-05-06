import "../../scss/IconPersonalMenu.scss";
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

export default function IconMenu({ cards }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:flex-row">
      {/* personal-menu__card */}
      {cards.map((card, index) => (
        <IconCard key={index} {...card} />
      ))}
    </div>
  );
}
