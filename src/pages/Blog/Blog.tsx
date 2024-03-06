import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className=" mb-5 text-center text-4xl font-semibold">Blog</div>
      <div style={{ height: "50vh", width: "100%" }}></div>
      <Footer />
    </>
  );
}