import "../scss/gallery.scss";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Gallery() {
  return (
    <div className="mt-9">
      <div className="text-center my-10">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Te mostramos lugares inexplorados
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          dicta voluptatibus blanditiis adipisci reiciendis, impedit asperiores
          minima facere eaque perferendis.
          <a
            href="#"
            className="inline-flex items-center mx-2 justify-center text-base font-medium text-center text-red-700 rounded-lg hover:text-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900 hover:underline underli"
          >
            Mirar mas
            <ArrowRightIcon className="h-6 w-6" />
          </a>
        </p>
      </div>
      <section className="events cards-slider bg-gray-900 p-3">
        <div className="cards-slider__container container">
          <div className="cards-slider__items container">
            <div className="card-slider__item-div">
              <div className="cards-slider__item">
                <h2 className="cards-slider__h2">Evento1</h2>
                <p className="cards-slider__text--inner">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facilis eos unde esse excepturi maxime quod, corporis totam ex
                  tempore exercitationem ducimus inventore? At aut.
                </p>
              </div>
            </div>
            <div className="card-slider__item-div">
              <div className="cards-slider__item">
                <h2 className="cards-slider__h2">Evento2</h2>
                <p className="cards-slider__text--inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  quae voluptatibus aperiam sunt molestiae tenetur corporis nemo
                  deserunt ex esse unde vel, official.
                </p>
              </div>
            </div>
            <div className="card-slider__item-div">
              <div className="cards-slider__item">
                <h2 className="cards-slider__h2">Evento3</h2>
                <p className="cards-slider__text--inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  magnam inventore delectus odio corrupti at assumenda illum
                  perferendis corporis! Nisi dicta eligendi recusandae.
                </p>
              </div>
            </div>
            <div className="card-slider__item-div">
              <div className="cards-slider__item">
                <h2 className="cards-slider__h2">Evento4</h2>
                <p className="cards-slider__text--inner">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt nobis consequatur est possimus necessitatibus maiores
                  consequuntur, expedita veritatis ullam sunt, culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
