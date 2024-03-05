import InteractiveCard from "./Atoms/Cards/InteractiveCard";
import { useEffect, useState } from "react";
// --- Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

export default function InteractiveCards() {
  // images declaration
  let images = [
    "https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1563693267403-111c5d856e49?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1530445098981-862544854865?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
          {images.map((image) => (
            <InteractiveCard bgImage={image} />
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
          className="mySwiper mt-5 bg-slate-900"
        >
          {/* slide items */}
          {images.map((image) => (
            <SwiperSlide className="w-fit rounded-xl bg-slate-300">
              {/* card itself */}
              <InteractiveCard bgImage={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
