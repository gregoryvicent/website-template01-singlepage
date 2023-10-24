import { StaticImageData } from "next/image";

type ArticleJobPropsType = {
  imgUrl: StaticImageData;
  title: string;
  job: string;
  date: string;
  datetime: string;
  content: React.ReactElement;
  buttonLink?: React.ReactElement;
}

export default ArticleJobPropsType;