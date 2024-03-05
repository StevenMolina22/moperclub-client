import "../scss/ImagesIcons.scss";

type ArticleItem = {
  image: string;
  message: string;
};
export default function ImagesIcons() {
  const articleItems: ArticleItem[] = [
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
  return (
    <div>
      <h2 className="mb-4 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        Descubre!
      </h2>
      {/* ----Article Videos ---- */}
      <section
        className="extra-videos flex flex-col items-center justify-items-center"
        id="extra-videos"
      >
        {/* articles cards */}
        <div className="extra-videos__items mt-4 flex flex-wrap justify-center gap-5">
          {/* article card */}
          {articleItems.map((item) => (
            <article className="extra-videos__article flex flex-col items-center gap-2">
              <img
                className="extra-videos__video w-[14rem] rounded-xl object-cover"
                src={item.image}
              />
              <h4 className="text-lg font-medium">{item.message}</h4>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- */}
      {/* ----icons Container ---- */}
      <section className="extra-icons responsive-icons">
        <div className="extra-icons__container">
          <i className="extra-icons__i bi bi-archive-fill"></i>
          <i className="extra-icons__i bi bi-backpack4-fill"></i>
          <i className="extra-icons__i bi bi-fire"></i>
          <i className="extra-icons__i bi bi-award"></i>
          <i className="extra-icons__i bi bi-bookmarks-fill"></i>
        </div>
      </section>
    </div>
  );
}
