import "../../../scss/cards/InteractiveCard.scss";
// type declaration
interface InteractiveCardProps {
  bgImage: string;
}

export default function InteractiveCard({
  bgImage,
}: InteractiveCardProps) {
  // background
  return (
    <div
      className="interactive-card bg-cover bg-center w-[300px] h-[560px] lg:w-[320px] lg:h-[600px] rounded-xl group group-hover:shadow-red-500 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="group-hover:bg-red-700 group-hover:bg-opacity-15 group-hover:shadow-red-900/50 w-[100%] h-[100%] px-1 py-3 md:px-3 md:py-5 flex flex-col justify-end rounded-xl">
        <h2 className="text-slate-50 text-xl lg:text-2xl hidden group-hover:block">
          Evento1
        </h2>
        <p className="text-slate-200 text-base lg:text-lg hidden opacity-0 transition-opacity duration-2000 group-hover:block group-hover:opacity-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eos
          unde esse excepturi maxime quod, corporis totam ex tempore
          exercitationem ducimus inventore? At aut.
        </p>
      </div>
    </div>
  );
}
