import { useState, useEffect } from "react"; // react functions
// components
import MoreButton from "../Utilities/InfoDropdown"; // dropdown button more info
import { Swiper, SwiperSlide } from "swiper/react"; // slider components
import "swiper/css"; // style for sliders
// media: icons
import { ArrowRightIcon } from "@heroicons/react/24/outline";

// --Type definition for the api data (to be used in the item state definition)
type ItemType = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
};

interface Props {
  items: ItemType[];
}

// --- main component
const MyComponent = ({ items }: Props) => {
  // window width state definitions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // handles responsiveness of the slider
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // (Empty dependency array ensures this effect runs only once after component mount)

  // --- returned slider component
  return (
    // wrapper for the content
    <div className="mt-9">
      {/* title text and message */}
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Solo Sorprendete
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem quae quaerat dolorem animi, tenetur molestiae pariatur
          alias quibusdam modi accusantium?
          <a
            href="/recommended"
            className="underli mx-2 inline-flex items-center justify-center rounded-lg text-center text-base font-medium text-orange-600 hover:text-orange-700 hover:underline focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            Mirar mas
            <ArrowRightIcon className="h-6 w-6" />
          </a>
        </p>
      </div>

      {/* slider itself */}
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={windowWidth > 768 ? 1.5 : 1.2} // view device settings
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* slides: items of the slider */}
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="h-[380px] rounded-2xl bg-cover bg-center object-fill p-2 lg:h-[670px]"
            >
              {" "}
              {/* dropdown info menu */}
              <MoreButton
                id={index}
                title={item.name}
                description={item.description}
                address={item.address}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* extra slides if backend not active */}
        <SwiperSlide>
          <img
            className="h-[380px] rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1707789045435-971e848a914b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="z"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[380px] rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1708086504310-134d8c4005f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[380px] rounded-2xl lg:h-[670px]"
            src="https://images.unsplash.com/photo-1707789045435-971e848a914b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="z"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyComponent;
