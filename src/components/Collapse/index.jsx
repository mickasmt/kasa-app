import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/colors";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Collapse;
