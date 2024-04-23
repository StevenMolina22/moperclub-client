import "../../../scss/cards/InteractiveCard.scss";
// type declaration
interface InteractiveCardProps {
  image: string;
  title: string;
  body: string;
}
/**
 * 
 * @returns - A rendered card with the info
 */
export default function InteractiveCard({
  image,
  title,
  body,
}: InteractiveCardProps) {
  return (
    <div
      className="interactive-card group h-[560px] w-[300px] rounded-xl bg-cover bg-center group-hover:shadow-red-500 lg:h-[600px] lg:w-[320px] "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-[100%] w-[100%] flex-col justify-end rounded-xl px-3 py-6 group-hover:bg-red-950 group-hover:bg-opacity-35 group-hover:shadow-red-900/50 md:px-3 md:py-5">
        <h2 className="hidden text-xl text-slate-50 group-hover:block lg:text-2xl">
          {title}
        </h2>
        <p className="duration-2000 hidden text-base text-slate-100 opacity-0 transition-opacity group-hover:block group-hover:opacity-100 lg:text-lg">
          {body}
        </p>
      </div>
    </div>
  );
}
