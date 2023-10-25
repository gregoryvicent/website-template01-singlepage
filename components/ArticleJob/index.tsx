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
    <article className="my-5 grid grid-cols-1 md:grid-cols-3 md:gap-5 md:my-14 lg:my-28 xl:gap-16">
      <div>
        <Image
          className="rounded-[50px] my-5"
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className="md:col-span-2">
        <h3 className="text-3xl font-bold text-left mb-5 text-blue-500 overflow-hidden">{title}</h3>
        <span className="text-green-700 italic font-normal">{job}, <time dateTime={datetime}>{date}</time></span>
        {content}
        {buttonLink || ""}
      </div>
    </article>
  );
};

export default ArticleJob;
