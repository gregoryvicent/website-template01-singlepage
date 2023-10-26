import Image from 'next/image';

import youtubeImage from '@/public/image/youtube.png';
import xImage from '@/public/image/twitter_x.png';
import linkedinImage from '@/public/image/linkedin.png';

const SocialMediaSection = () => {
  return (
    <section className="bg-stone-900 text-white p-7 sm:px-24 md:px-32 lg:px-48">
      <div className="max-w-3xl mx-auto lg:my-20">
        <h2 className="text-2xl font-semibold text-center overflow-hidden sm:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident, sit aliquid dolorem officia mollitia doloribus.</h2>
        <hr className="w-1/3 border-2 border-white mx-auto my-8 font-bold"/>
        <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique accusamus distinctio 🔥</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-7 mx-auto mb-16 max-w-[630px] lg:grid-cols-3 lg:grid-rows-1">
          <a className="justify-self-center" href="https://youtube.com" target="_blank">
            <Image
              className="w-32 rounded-lg transition-all duration-300 ease-in-out lg:hover:w-36"
              src={youtubeImage}
              alt="Youtube Logo"
            />
          </a>
          <a className="justify-self-center" href="https://twitter.com" target="_blank">
            <Image
              className="w-32 rounded-lg transition-all duration-300 ease-in-out lg:hover:w-36"
              src={xImage}
              alt="Twitter Logo"
            />
          </a>
          <a className="justify-self-center col-span-2 lg:col-span-1" href="https://linkedin.com" target="_blank">
            <Image
              className="w-32 rounded-lg transition-all duration-300 ease-in-out lg:hover:w-36"
              src={linkedinImage}
              alt="Linkedin Logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaSection;