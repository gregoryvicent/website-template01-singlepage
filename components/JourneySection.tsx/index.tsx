import ArticleJob from '../ArticleJob'

import Content01 from '../ContentJob/Content01'
import Content02 from '../ContentJob/Content02'
import Content03 from '../ContentJob/Content03'
import Content04 from '../ContentJob/Content04'
import Content05 from '../ContentJob/Content05'
import Content06 from '../ContentJob/Content06'

import ButtonLink from '../ButtonLink'

import imageJob01 from '../../public/image/content01/job1.jpg'
import imageJob02 from '../../public/image/content01/job2.jpg'
import imageJob03 from '../../public/image/content01/job3.jpg'
import imageJob04 from '../../public/image/content01/job4.jpg'
import imageJob05 from '../../public/image/content01/job5.jpg'
import imageJob06 from '../../public/image/content01/job6.jpg'

export default function JourneySection() {
  return (
    <section className="sm:px-20 lg:px-40">
      <h2 className="m-10 text-4xl font-semibold text-gray-800 text-center italic underline underline-offset-8 decoration-4 decoration-gray-600 h-16 lg:text-6xl lg:h-20 lg:my-32">Mi Viaje</h2>
      <div className="p-5">
        <p className="text-lg text-center text-gray-800 md:text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis natus dolor autem quibusdam commodi nam velit! Tempora, enim ducimus temporibus architecto expedita obcaecati hic vel odit aspernatur totam possimus cum.</p>
      </div>
      <section className="p-3 text-gray-800 font-light">
        <ArticleJob
          imgUrl={imageJob01}
          title="Global Planet - Reportera de Investigación"
          job="Principal reportera de investigación"
          date="2023"
          datetime="2023"
          content={<Content01 />}
        />
        <ArticleJob
          imgUrl={imageJob02}
          title="Organizadora de Contentido en 'Linus True'"
          job="Manager de contendidos para redes sociales"
          date="2021"
          datetime="2021"
          content={<Content02 />}
        />
        <ArticleJob
          imgUrl={imageJob03}
          title="Redactora para el periodico NewsNews"
          job="Periodista de campo para el periodico impreso NewsNews"
          date="2017"
          datetime="2017"
          content={<Content03 />}
          buttonLink={<ButtonLink link="https://google.com" text="NewsNews.com" />}
        />
        <ArticleJob
          imgUrl={imageJob04}
          title="Especialista en SEO - 'Dev Zone'"
          job="Encargada del manejo del SEO del sitio web Dev Zone"
          date="2012"
          datetime="2012"
          content={<Content04 />}
          buttonLink={<ButtonLink link="#top" text="Dev Zone" />}
        />
        <ArticleJob
          imgUrl={imageJob05}
          title="Redactora de documentos legales para LGW International"
          job="Redactora auxiliar de docuementos legales para LGW"
          date="2005"
          datetime="2005"
          content={<Content05 />}
        />
        <ArticleJob
          imgUrl={imageJob06}
          title="Escritora independiente"
          job="Inicie mi carrera como escritora independiente"
          date="2002"
          datetime="2002"
          content={<Content06 />}
          buttonLink={<ButtonLink link="https://google.com" text="Mi biblioteca online en Amazon" />}
        />
      </section>
    </section>
  )
}