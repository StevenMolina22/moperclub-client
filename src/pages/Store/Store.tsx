import Navbar from "../../components/Layout/Navbar/Navbar";
import Footer from "../../components/Layout/Footer/Footer";
import UnderConstructionPage from "../../components/Common/ConstructionAnimation";

export default function Store() {
  return (
    <>
      <Navbar />
      <div className=" mb-5 text-center text-4xl font-semibold">Store</div>
      <UnderConstructionPage />
      <Footer />
    </>
  );
}
