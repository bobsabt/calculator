import Button from "./Button";
import PropTypes from 'prop-types';

const OperatorButtons = ({ onClickHandler }) => {
    const operators = ["=","+", "-", "*", "/", "^2", "√", "C", ];
    return (
        <>
            {operators.map((operator, index) => <Button  key={index} label={operator} onClickHandler={onClickHandler}/> ) } 
        </>
    );
};

OperatorButtons.propTypes = {
    onClickHandler: PropTypes.func
};

export default OperatorButtons;