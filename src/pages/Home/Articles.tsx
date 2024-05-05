import ImagesIcons from "../../components/Layout/ImagesIcons";
import useArticles from "../../hooks/useArticles";


function Articles() {
  const {articles} = useArticles();
  return <ImagesIcons articles={articles} />;
}

export default Articles;
