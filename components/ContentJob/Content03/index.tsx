import ContentContainer from "../ContentContainer"
import DotListItem from "@/components/htmlChangeComponents/DotListItem"

const Content03 = () => {
  return (
    <ContentContainer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, impedit quibusdam iure perferendis minus voluptatibus nulla rerum illo dignissimos sequi hic at? Sapiente ipsam incidunt ratione autem consectetur amet praesentium.</p>
      <br />
      <h3 className="font-bold">Lorem ipsum dolor sit amet consectetur</h3>
      <br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium amet velit, vel ullam libero possimus rerum asperiores iusto tenetur facere, cum, laboriosam laborum. Ea iste quis dolorum temporibus, ad accusamus.</p>
      <br />
      <ul>
        <li className="my-4 ml-5">
          <p><DotListItem />ipsum dolor, <b>sit amet consectetur adipisicing elit</b>. Enim, rem. Modi quae neque aliquid est ratione cupiditate voluptatem in expedita, vel ad, numquam veniam sapiente ex quisquam sit quaerat nulla.</p>
        </li>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit amet consectetur,<b>adipisicing elit</b>. Facilis, repudiandae! Totam quod, perspiciatis aliquam accusantium perferendis eius voluptatibus? Tenetur fugit nam quasi deserunt deleniti dolorem dolorum. <b>Placeat eum odit laborum!</b></p>
        </li>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit amet consectetur, adipisicing elit.<b> Dolore ab numquam tenetur sequi architecto?</b></p>
        </li>
        <li className="my-4 ml-5">
          <p><DotListItem />Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Quaerat omnis deserunt exercitationem cumque sed odit molestiae magni</b>, minima perferendis maxime delectus eveniet asperiores! Doloribus ad eligendi non repellat ducimus? Magni!</p>
        </li>
      </ul>
    </ContentContainer>
  );
}

export default Content03;