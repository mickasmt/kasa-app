import styled from "styled-components";
import data from "../../data/logements.json";
import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Tags from "../../components/UI/Tags";
import Rating from "../../components/UI/Rating";
import HouseInfos from "../../components/UI/HouseInfos";
import HostProfile from "../../components/UI/HostProfile";

const Container = styled.article`
  padding: 30px 0 24px;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CollapseWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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
          <Flex>
            <HouseInfos title={logement.title} location={logement.location} />
            <Tags tags={logement.tags} />
          </Flex>

          <Flex>
            <HostProfile host={logement.host} />
            <Rating rating={logement.rating} />
          </Flex>
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

      {/* <pre>{JSON.stringify(logement, null, 2)}</pre> */}
    </>
  );
}

export default House;
