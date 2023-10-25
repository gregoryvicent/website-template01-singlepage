import ArticleView from "../ArticleView";
import ButtonLink from "../ButtonLink";

const MyViewsSection = () => {
  return (
    <section className="bg-stone-900 text-white sm:px-20 md:px-10 lg:px-40">
      <h2 className="m-10 text-4xl font-semibold text-center italic underline underline-offset-8 decoration-4 h-16 lg:text-6xl lg:h-20 lg:my-20">Mis Vistas</h2>
      <div className="p-5">
        <p className="text-lg text-center md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis ad deleniti!🌱</p>
      </div>
      <div className="p-3 font-light grid grid-cols-1 md:grid-cols-3 xl:mt-16">
        <ArticleView
          title="My Substack 📝"
          text="I publish essays on how we can 'level up America' with tech, media, and movement-building."
          buttonLink={<ButtonLink text="READ MY SUBSTACK" link="#"/>}
        />
        <ArticleView
          title="Mi Youtube 🔥"
          text="I post video essays on how you can light the fire inside of you to fully flourish in this time full of extreme chaos + possibility."
          buttonLink={<ButtonLink text="CHECK OUT MY YOUTUBE" link="#"/>}
        />
        <ArticleView
          title="My Wiki 🦸🏻"
          text="I publish how-to guides and my views on a wide variety of topics that don't fit into a particular bucket."
          buttonLink={<ButtonLink text="CHECK OUT MY WIKI" link="#"/>}
        />
      </div>
    </section>
  );
}

export default MyViewsSection;