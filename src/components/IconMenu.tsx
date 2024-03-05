import "../scss/IconMenu.scss";

export default function IconMenu() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* title text  */}
      <div className="text-center mb-9">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Disfruta de verdad con{" "}
          <span className="text-orange-600">el #1 de Argentina</span> BS.
        </h2>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 w-[70%] mx-auto">
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
        <div className="text__container text-center text-gray-100 pt-5">
          <h2 className="text__h2 text-5xl font-semibold">Tu Menu Personal</h2>
          <h4 className="text__h4 text-3xl font-normal text-gray-300">
            Hecho para ti
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
              <i className="bi bi-youtube"></i>
            </span>
          </a>
          {/* lower link */}
          <a
            className="bg_links company-menu__social company-menu__app2"
            href="https://www.instagram.com"
            target="_blank"
          >
            <span className="info-icon">
              <i className="bi bi-instagram"></i>
            </span>
          </a>
          {/* lower link */}
          <a
            className="bg_links company-menu__social company-menu__app3"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <span className="info-icon">
              <i className="bi bi-linkedin"></i>
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
          <div className="personal-menu__card">
            <div className="info-icon">
              <i className="material-icons md-36">face</i>
            </div>
            <p className="personal-menu__title">Perfil</p>
            <p className="personal-menu__text">
              Haz click para visualizar el perfil
            </p>
          </div>
          {/* end personal-menu__card */}
          {/* personal-menu__card */}
          <div className="personal-menu__card">
            <div className="info-icon">
              <i className="material-icons md-36">favorite_border</i>
            </div>
            <p className="personal-menu__title">Favoritos</p>
            <p className="personal-menu__text">
              Mira todos tus favoritos en un solo lugar
            </p>
          </div>
          {/* end personal-menu__card */}
          {/* personal-menu__card */}
          <div className="personal-menu__card">
            <div className="info-icon">
              <i className="material-icons md-36">alternate_email</i>
            </div>
            <p className="personal-menu__title">Contactos</p>
            <p className="personal-menu__text">
              Añade o cambia tus contactos o links.
            </p>
          </div>
          {/* end personal-menu__card */}
        </div>
      </section>
    </div>
  );
}
