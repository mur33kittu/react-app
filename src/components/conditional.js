import React from 'react';

const Conditional = () => {
    const value = true;
    return (
        <div>
            {value ? <h3>Hello True</h3> : <h1>Hello False</h1>}            
        </div>
    )
}


export default Conditional;