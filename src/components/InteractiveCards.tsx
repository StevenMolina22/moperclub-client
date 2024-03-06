import InteractiveCard from "./Atoms/Cards/InteractiveCard";
import { useEffect, useState } from "react";
// --- Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

// interactive card item type declaration 
interface cardContent {
  title: string;
  body: string;
  image: string;
}

// interactive cards props type declaration
interface Props {
  cardsContent: cardContent[];
}

export default function InteractiveCards( {cardsContent}: Props) {
  // images declaration
  // window width state declaration
  let [winWidth, setWinWidth] = useState(window.innerWidth);

  // handles responsiveness
  useEffect(() => {
    // update winwidth state
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    // resize window
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- returned card component
  return (
    // wrapper
    <div className="mt-12 bg-slate-900 py-4">
      {/* title text */}
      <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-5xl lg:text-6xl ">
        Eventos para ti
      </h2>
      {/* shows gallery if large device, carousel if small device */}
      {winWidth >= 768 ? (
        <div className="flex flex-wrap justify-center gap-2 p-8">
          {cardsContent.map((cardContent) => (
            <InteractiveCard
              title={cardContent.title}
              body={cardContent.body}
              image={cardContent.image}
            />
          ))}
        </div>
      ) : (
        // carousel for smaller devices
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          modules={[Pagination]}
          className="mySwiper mt-5 bg-slate-900 p-3"
        >
          {/* slide items */}
          {cardsContent.map((cardContent, index) => (
            <SwiperSlide key={index} className="w-fit rounded-xl bg-slate-300 ">
              {/* card itself */}
              <InteractiveCard
                title={cardContent.title}
                body={cardContent.body}
                image={cardContent.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}