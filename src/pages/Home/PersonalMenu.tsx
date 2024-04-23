import IconMenu from "../../components/Features/IconMenu";

export default function PersonalMenu() {
  const iconCardsContent = [
    {
      title: "Perfil",
      body: "Haz click para visualizar el perfil",
      icon: "face",
    },
    {
      title: "Favoritos",
      body: "Mira todos tus favoritos en un solo lugar",
      icon: "favorite_border",
    },
    {
      title: "Contactos",
      body: "Añade o cambia tus contactos o links.",
      icon: "alternate_email",
    },
  ];

  return (
    <>
      {/* Section Title Text */}
      <div className="mb-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Disfruta de verdad con{" "}
          <span className="text-orange-600">el #1 de Argentina</span> BS.
        </h2>
        <p className="mx-auto w-[70%] text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam
          voluptatem itaque aliquam qui ducimus molestiae reiciendis perferendis
          optio autem.
        </p>
      </div>
      
      <IconMenu
        title="Tu Menu Personal"
        subtitle="Hecho Para Ti"
        cards={iconCardsContent}
      />
    </>
  );
}
