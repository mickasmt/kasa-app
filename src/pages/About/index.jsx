import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import styled from "styled-components";
// import colors from "../../utils/style/colors";

import data from "../../data/about.json";

const Container = styled.div`
  width: 100%;
  max-width: 1023px;
  margin: 0 auto;

  > * {
    margin-top: 31px;
  }
`;

function About() {
  return (
    <>
      <Banner name="about" />

      <Container>
        {data.map((info, index) => {
          return (
            <Collapse key={index} title={info.title} page="about" >
              <p>{info.content}</p>
            </Collapse>
          );
        })}
      </Container>
    </>
  );
}

export default About;
