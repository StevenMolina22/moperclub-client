import InteractiveCard from "../Common/Cards/InteractiveCard";
import { useEffect, useState } from "react";
// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// interactive card item type declaration
interface cardContent {
  name: string;
  description: string;
  image: string;
}

// interactive cards props type declaration

export const VerticalCardsGallery = ({ cardsContent }: { cardsContent: cardContent[] }) => {
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
    <>
      {/* title text */}
      {/* Show gallery/ carousel depending on screen*/}
      {winWidth >= 768 ? (
        // show gallery for large screen
        <div className="flex flex-wrap justify-center gap-2 p-8">
          {cardsContent.map((cardContent, index) => (
            <InteractiveCard
              key={index}
              title={cardContent.name}
              body={cardContent.description}
              image={cardContent.image}
            />
          ))}
        </div>
      ) : (
        // Show carousel for small screen
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
                title={cardContent.name}
                body={cardContent.description}
                image={cardContent.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
