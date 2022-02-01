import React from 'react'
import PropTypes from 'prop-types';

function Header(props) {
  return <div>{props.text}</div>;
}

Header.defaultProps = {
  text: 'Feedback UI'
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header;
