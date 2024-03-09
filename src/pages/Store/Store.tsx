import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UnderConstructionPage from "../../components/Construction";

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
