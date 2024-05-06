type ArticleItemProps = {
  article: {
    title: string;
    image: string;
  };
};
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <article className="extra-videos__article flex flex-col items-center gap-2">
      <img
        className="size-[220px] rounded-xl object-cover"
        src={article.image}
      />
      <h4 className="text-lg font-medium">{article.title}</h4>
    </article>
  );
};

export default ArticleItem;
