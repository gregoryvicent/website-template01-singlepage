import ContentContainer from '../ContentContainer';
import DotListItem from '@/components/htmlChangeComponents/DotListItem';

// Componente que representa el contenido en HTML para el prop 'container' del componente 'ArticleJob'
const Content01 = () => {
  return (
    // 'ContentContainer' contiene todos los elementos HTML (JSX) de cada de las zonas de contentido dentro del componente 'ArticleJob'
    // Todos los elementos dentro de 'ContentContainer' siguen los estilos del mismo 'ContentContainer'
    <ContentContainer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quo error iusto accusantium laborum esse <a href="#">natus</a>. Veritatis perferendis maxime laborum, temporibus nisi ex, quod ut explicabo saepe, autem ipsam debitis nemo! Reiciendis voluptas possimus quibusdam minima iusto. Provident rerum obcaecati nisi quod possimus quidem delectus repellat. Perferendis id itaque quis!</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque officia. Laboriosam nobis cumque earum possimus dicta tenetur labore pariatur unde repellat. Magni numquam praesentium voluptatem expedita, similique earum obcaecati.</p>
      <br />
      <h3 className="font-bold">Lorem, ipsum dolor:</h3>
      <br />
      <ul>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, dolor illo! Atque amet accusantium officiis.</p>
        </li>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maiores deleniti nobis. Tenetur quod molestias modi voluptatibus voluptas asperiores nobis.</p>
        </li>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ratione!
          </p>
        </li>
      </ul>
      <br />
      <p>Lorem ipsum dolor, <b>sit amet consectetur adipisicing elit.</b> Voluptates placeat ab laboriosam mollitia ex expedita consequatur natus sapiente ipsa quos ipsum ipsam quo temporibus, omnis excepturi dolorem, optio at! Non rem, animi repellat aliquam saepe quisquam corrupti quod, labore harum repudiandae porro tempora soluta iusto. <b>Labore ratione est magni officia. Ipsa quod, atque quasi cumque debitis quibusdam explicabo tenetur neque nostrum itaque</b>, accusantium obcaecati dolorum nulla repellat impedit ad unde!</p>
    </ContentContainer>
  )
}

export default Content01;