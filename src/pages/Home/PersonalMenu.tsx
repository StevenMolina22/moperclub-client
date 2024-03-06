import IconMenu from "../../components/IconMenu"

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
    <IconMenu
        title="Tu Menu Personal"
        subtitle="Hecho Para Ti"
        cards={iconCardsContent}
      />
  )
}
