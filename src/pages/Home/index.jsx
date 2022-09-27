import Banner from "../../components/Banner";
import Card from "../../components/Card";

import styled from "styled-components";
import colors from "../../utils/style/colors";

import data from "../../logements.json";

const CardsContainer = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 50px 50px; */
  background-color: ${colors.secondary};
  border-radius: 25px;
  overflow: hidden;
  padding: 40px;
`;

function Home() {
  return (
    <div>
      <Banner name="home" title="Chez vous, partout et ailleurs" />

      <CardsContainer>
        {data.map((logement) => {
          return <Card logement={logement} key={logement.id} />;
        })}
      </CardsContainer>
    </div>
  );
}

export default Home;
