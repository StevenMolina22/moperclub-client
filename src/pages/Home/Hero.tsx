import Banner from "../../components/Banner";

export default function Hero() {
  const bgHeroImage: string =
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Banner
      bgImage={bgHeroImage}
      titleText="MOPERCLUB"
      subtitleText="Experiencias Inolvidables"
    />
  );
}
