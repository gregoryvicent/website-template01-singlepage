import Image from "next/image";

import ArticleJobPropsType from "@/types/articleJobPropsType";

const ArticleJob: React.FC<ArticleJobPropsType> = ({
  imgUrl,
  title,
  job,
  date,
  datetime,
  content,
  buttonLink
}) => {
  return (
    <article className="my-5">
      <Image
        className="rounded-lg my-5"
        src={imgUrl}
        alt={title}
      />
      <h3 className="text-3xl font-bold text-left mb-5 text-blue-500 overflow-hidden">{title}</h3>
      <span className="text-green-700 italic font-normal">{job}, <time dateTime={datetime}>{date}</time></span>
      {content}
      {buttonLink || ""}
    </article>
  );
};

export default ArticleJob;
