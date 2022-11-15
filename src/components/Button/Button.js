import './Button.scss';
import PropTypes from 'prop-types';

export default function Button({actionClick, className, value}) {
  //state

  //comportement

  //render
  return (
    <button
     className={className}
     onClick = {actionClick}
     >
        {value}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  actionClick: PropTypes.func.isRequired,
  // la valeur est soit un string soit un number
  value:  PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}

Button.defaultProps = {
  className : "Button",
  actionClick : () => {console.log('actionClick')},
  value: "Button Value"
}