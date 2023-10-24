import ContentContainer from "../ContentContainer";
import DotListItem from "@/components/htmlChangeComponents/DotListItem";

const Content06 = () => {
  return (
    <ContentContainer>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eveniet numquam vel nostrum perferendis cupiditate rerum cumque minus quisquam error exercitationem iure culpa, dolorem quis ullam maiores saepe ad facilis accusamus esse explicabo in quia laborum? Unde earum velit quam dignissimos molestias. Fugit dolor totam incidunt sed exercitationem neque aperiam beatae. Tenetur, ullam distinctio! Assumenda corrupti ratione, iure amet, delectus eveniet ipsa similique, ducimus eligendi provident necessitatibus quibusdam ipsam excepturi!</p>
      <br />
      <ul>
        <li className="ml-5 my-5">
          <p><DotListItem/>Lorem <b>ipsum dolor sit amet</b>, consectetur adipisicing elit. Iste non repudiandae dicta magnam sequi at dolor architecto. Non vero <a href="#">voluptatibus</a>, rem numquam exercitationem laboriosam sit veritatis. Numquam aspernatur assumenda debitis?</p>
        </li>
        <li className="ml-5 my-5">
          <p><DotListItem/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae rerum accusamus. Voluptatem saepe eaque et quibusdam obcaecati animi, <a href="#">earum itaque</a>, asperiores totam iure sunt, quas quod autem amet quo?</p>
        </li>
      </ul>
    </ContentContainer>
  );
}

export default Content06;