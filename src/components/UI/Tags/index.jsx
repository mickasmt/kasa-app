import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../../utils/style/colors";

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Tag = styled.span`
  min-width: 115px;
  height: 25px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-right: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  padding: 3px 30px;
`;

function Tags({ tags }) {
  return (
    <div>
      <TagsContainer>
        {tags.length > 0 && tags.map((tag) => <Tag>{tag}</Tag>)}
      </TagsContainer>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.object.isRequired,
};

export default Tags;
