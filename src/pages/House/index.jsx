import styled from "styled-components";
import data from "../../logements.json";
import { useParams } from "react-router-dom";

import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Tags from "../../components/UI/Tags";
import Rating from "../../components/UI/Rating";
import HostProfile from "../../components/UI/HostProfile";

const Container = styled.article`
  /* padding: 30px 0; */
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CollapseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function House() {
  // get ID from url
  const params = useParams();

  const logement = data.find((lgmt) => lgmt.id === params.id);

  return (
    <>
      <Carousel images={logement.pictures} />

      <Container>
        <Columns>
          <div>
            <h2>{logement.title}</h2>
            <span>{logement.location}</span>

            <Tags tags={logement.tags} />
          </div>

          <div>
            <HostProfile host={logement.host} />
            <Rating rating={logement.rating} />
          </div>
        </Columns>

        <Columns>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>

          <Collapse title="Equipements">
            <ul>
              {logement.equipments.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </Columns>
      </Container>
    </>
  );
}

export default House;
