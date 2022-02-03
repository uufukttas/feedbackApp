import PropTypes from 'prop-types';

export default function Button({ children, version, isDisabled, type }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type: 'button'
}

Button.propTypes = {
    chidren: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}