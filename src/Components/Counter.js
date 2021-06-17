import React, { useState } from 'react'


function Counter(){
    const [count, setState] = useState(0);
    return (
        <h1>
            {count}<br/>
            <button onClick={()=>setState(count + 1)}>
                Arttır
            </button><br/>
            <button onClick={()=>setState(count - 1)}>
                Azalt
            </button>
        </h1>
    );

}

export default Counter