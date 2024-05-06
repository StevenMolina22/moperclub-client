import ImagesIcons from "../../components/Layout/ImagesIcons";
import useArticles from "../../hooks/useArticles";

function Articles() {
  const endpoint: string = "/blog/api/posts/";
  const { articles } = useArticles(endpoint);
  return (
    <>
      <h2 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        Descubre!
      </h2>
      <ImagesIcons articles={articles} />
    </>
  );
}

export default Articles;
