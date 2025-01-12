import React from "react";
import PropTypes from "prop-types";

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);
  return <></>;
};
Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Head;
