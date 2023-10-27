import ButtonLink from "../ButtonLink";

const MySystemSection = () => {
  return (
    <section className="bg-gradient-to-tr from-cyan-800 via-green-800 to-yellow-800">
      <h2 className="m-10 text-4xl text-white font-semibold text-center italic underline underline-offset-8 decoration-4 h-16 lg:text-6xl lg:h-20 lg:my-20">Mi Sistema</h2>
      <div className="mb-10">
        <ul className="text-center">
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum dolor.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum dolor.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem ipsum dolor sit.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem ipsum dolor sit amet.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum dolor.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem, ipsum.</a></li>
          <li className="my-3 font-bold md:my-8"><a className="uppercase text-white text-lg transition-all duration-500 ease-in-out sm:text-2xl" href="#" target="_blank" rel="noreferrer noopener">Lorem.</a></li>
        </ul>
      </div>
      <div className="m-5">
        <ButtonLink link="#" text="MIRA UN POCO DENTRO DE MI MENTE"/>
      </div>
    </section>
  );
}

export default MySystemSection;