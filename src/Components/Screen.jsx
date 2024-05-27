import PropTypes from 'prop-types';

const Screen = ({ value }) => {
    return (
        <div className="screen-container">
            <div className="screen-content">    
               <h1>{value}</h1>
            </div>
        </div>
    );
};

// Define prop types
Screen.propTypes = {
    value: PropTypes.number
  };

export default Screen;