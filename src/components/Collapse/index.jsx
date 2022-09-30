import { useState } from "react";
import PropTypes from "prop-types";
import {
  CollapseWrapper,
  CollapseHeader,
  CollapseTitle,
  CollapseContent,
} from "./styled";

import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";

function Collapse({ title, children, page }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseWrapper page={page}>
      <CollapseHeader page={page} onClick={() => setIsOpen(!isOpen)}>
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
  page: PropTypes.string,
};

export default Collapse;
