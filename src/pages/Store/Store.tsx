import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import UnderConstructionPage from "../../components/Common/Construction";

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
