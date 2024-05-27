import Screen from './Screen';
import OperatorButtons from './OperatorButtons';
import NumberButtons from './NumberButtons';

const Calculator = () => {
    return (
        <div className="calculator-container">
        <Screen />
        <div className='buttons-container'>
            <OperatorButtons />  
            <NumberButtons />
        </div>    

        </div>
    );
};

export default Calculator;