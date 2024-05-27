import PropTypes from 'prop-types';

const Button = ({ label, onClickHandler }) => {

    const myLabel = label;

    return (
        <>
            <button onClick={() => onClickHandler(myLabel)}>{label}</button>
        </>
    );
};

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]), 
    onClickHandler: PropTypes.func, 
  };

export default Button;