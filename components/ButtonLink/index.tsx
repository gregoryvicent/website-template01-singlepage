import ButtonLinkPropsType from "@/types/buttonLinkPropsType";

const ButtonLink: React.FC<ButtonLinkPropsType> = ({ link, text }) => {
  return (
    <div className="flex justify-center items-center h-28 w-auto">
      <a className="bg-gray-900 text-white text-center rounded-lg p-5 transition ease-in-out duration-300 hover:bg-gray-700" href={ link } target="_blank" rel="noreferrer noopener">{ text }</a>
    </div>
  );
}

export default ButtonLink;