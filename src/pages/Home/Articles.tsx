import ImagesIcons from "../../components/ImagesIcons";

export default function Articles() {
  // --- images icons settings
  const imagesIconsContent = [
    {
      image:
        "https://images.pexels.com/photos/1060803/pexels-photo-1060803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Quiero ir",
    },
    {
      image:
        "https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "No me lo pierdo",
    },
    {
      image:
        "https://images.pexels.com/photos/14980647/pexels-photo-14980647/free-photo-of-man-in-messi-jersey-celebrating-winning-fifa-world-cup-2022-on-street-of-buenos-aires-argentina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Ahi estare",
    },
    {
      image:
        "https://images.pexels.com/photos/14980616/pexels-photo-14980616/free-photo-of-couple-dancing-on-a-street-in-argentina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      message: "Linda Oportunidad",
    },
  ];
  return <ImagesIcons articles={imagesIconsContent} />;
}
