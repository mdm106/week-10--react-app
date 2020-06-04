import React, { useState } from 'react';

const CatchMeIfYouCan = ({ jump }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + jump );//event handler
    
    return (
        <button className="btn-primary mb-2" 
                onClick={ handleClick }
                style={{ transform: `translateY(${counter}px)`}}>
                    Jump
        </button>
    )
    }

CatchMeIfYouCan.defaultProps = {
    jump: 100
};

export default CatchMeIfYouCan;