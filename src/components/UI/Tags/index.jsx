import PropTypes from "prop-types";
import { TagsContainer, Tag } from "./styled";

function Tags({ tags }) {
  return (
    <div>
      <TagsContainer>
        {tags.length > 0 && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </TagsContainer>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
