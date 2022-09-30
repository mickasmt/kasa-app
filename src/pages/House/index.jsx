import data from "../../data/logements.json";
import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Tags from "../../components/UI/Tags";
import Rating from "../../components/UI/Rating";
import HouseInfos from "../../components/UI/HouseInfos";
import HostProfile from "../../components/UI/HostProfile";

import {
  Container,
  Columns,
  CollapseWrapper,
  InfosWrapper,
  ProfilWrapper,
} from "./styled";

function House() {
  // get ID from url
  const params = useParams();
  const logement = data.find((lgmt) => lgmt.id === params.id);

  if (!logement) return <Error />;

  return (
    <>
      <Carousel images={logement.pictures} />

      <Container>
        <Columns>
          <InfosWrapper>
            <HouseInfos title={logement.title} location={logement.location} />
            <Tags tags={logement.tags} />
          </InfosWrapper>

          <ProfilWrapper>
            <HostProfile host={logement.host} />
            <Rating rating={logement.rating} />
          </ProfilWrapper>
        </Columns>

        <CollapseWrapper>
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment) => {
                return <li key={equipment}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </CollapseWrapper>
      </Container>
    </>
  );
}

export default House;
