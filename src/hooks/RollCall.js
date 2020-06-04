import React, { useState } from 'react';

const RollCall = ({ names }) => {
    const [index, setIndex] = useState(0);

    const updateIndex = () => setIndex(index < names.length - 1 ? index + 1 : 0 );

    return (
        <>  
            <p>Name: { names[index] }</p>
            <button className="btn-primary mb-4" onClick={ updateIndex }>Next</button>
        </>
    )

}

RollCall.defaultProps = {
    names: ["Tom", "Dick", "Harry"],
};

export default RollCall;