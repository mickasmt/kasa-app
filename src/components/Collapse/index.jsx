import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";

const CollapseWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  max-width: 582px;
`;

const CollapseHeader = styled.div`
  height: 52px;
  color: #fff;
  background: ${colors.primary};
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const CollapseTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const CollapseContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;

  color: ${colors.primary};
  background-color: ${colors.tertiary};
  padding: 30px 20px;
  height: 100%;
  /* min-height: 249px; */

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseWrapper>
      <CollapseHeader onClick={() => setIsOpen(!isOpen)}>
        <CollapseTitle>{title}</CollapseTitle>
        <img src={isOpen ? arrowUp : arrowDown} alt="arrow" />
      </CollapseHeader>
      {isOpen && <CollapseContent>{children}</CollapseContent>}
    </CollapseWrapper>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Collapse;
