// Importamos el componente Image de next/image
import Image from "next/image";

// Importamos el tipo de propiedades para el componente ArticleJob
import ArticleJobPropsType from "@/types/articleJobPropsType";

// Definimos el componente ArticleJob
const ArticleJob: React.FC<ArticleJobPropsType> = ({
  imgUrl,
  title,
  job,
  date,
  datetime,
  content,
  buttonLink
}) => {
  // Retornamos el JSX del componente
  return (
    <article className="my-5 grid grid-cols-1 md:grid-cols-3 md:gap-5 md:my-14 lg:my-28 xl:gap-16">
      <div>
        {/* Renderizamos la imagen con el componente Image */}
        <Image
          className="rounded-[50px] my-5"
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className="md:col-span-2">
        {/* Renderizamos el título del artículo */}
        <h3 className="text-3xl font-bold text-left mb-5 text-blue-500 overflow-hidden">{title}</h3>
        {/* Renderizamos el trabajo y la fecha */}
        <span className="text-green-700 italic font-normal">{job}, <time dateTime={datetime}>{date}</time></span>
        {/* Renderizamos el contenido del artículo */}
        {content}
        {/* Renderizamos el enlace del botón si existe */}
        {buttonLink || ""}
      </div>
    </article>
  );
};

// Exportamos el componente ArticleJob
export default ArticleJob;
