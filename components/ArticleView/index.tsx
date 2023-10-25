import ArticleViewPropsType from "@/types/articleViewPropsType";

const ArticleView: React.FC<ArticleViewPropsType> = ({ title, text, buttonLink }) => {
  return (
    <article className="p-5 md:grid xl:gap-5">
      <h3 className="text-2xl font-bold overflow-hidden md:self-start xl:text-3xl">{ title }</h3>
      <div className="mt-3 md:self-center">
        <p className="xl:text-lg">{ text }</p>
      </div>
      <div className="md:self-end">
        { buttonLink }
      </div>
    </article>
  );
}

export default ArticleView;