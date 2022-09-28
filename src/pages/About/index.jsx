import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import styled from "styled-components";
// import colors from "../../utils/style/colors";

import data from "../../data/about.json";

const Container = styled.div`
  /* padding: 30px 0; */
  &:nth-child() {
    
  }
`;

function About() {
  return (
    <>
      <Banner name="about" />

      <Container>
        {data.map((info, index) => {
          return (
            <Collapse title={info.title} key={index}>
              <p>{info.content}</p>
            </Collapse>
          );
        })}
      </Container>
    </>
  );
}

export default About;
