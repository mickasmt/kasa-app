import Banner from "../../components/Banner";
import Card from "../../components/Card";

import styled from "styled-components";
import colors from "../../utils/style/colors";
import screens from "../../utils/style/screens";

import data from "../../data/logements.json";

const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  margin: 20px 0;
  grid-gap: 20px;
  box-sizing: border-box;
  grid-auto-columns: minmax(10px, auto);
  grid-template-columns: repeat(1, 1fr);
  
  @media ${screens.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${screens.laptop} {
    margin: 43px 0;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media ${screens.desktop} {    
    grid-gap: 60px;
    padding: 40px;
    overflow: hidden;
    border-radius: 25px;
    background-color: ${colors.tertiary};
  }
`;

function Home() {
  return (
    <>
      <Banner name="home" title="Chez vous, partout et ailleurs" />

      <CardsContainer>
        {data.map((logement) => {
          return <Card logement={logement} key={logement.id} />;
        })}
      </CardsContainer>
    </>
  );
}

export default Home;
