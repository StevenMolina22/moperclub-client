import "../../scss/ImagesIcons.scss";
import ArticleItem from "../Common/ArticleItem";

// article item type definition
type ArticleItem = {
  title: string;
  image: string;
};
// articles items props type definition
interface Props {
  articles: ArticleItem[];
}

export default function ImagesIcons({ articles }: Props) {
  return (
    <section
      className="flex flex-col items-center justify-items-center"
      id="extra-videos"
    >
      {/* Article Cards Wrapper */}
      <div className="extra-videos__items mt-4 flex flex-wrap justify-center gap-5">
        {/* Article Card */}
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
