// hook is a tool which helps to rerender edit and html if something changes by creating a var., function that changes it and a default state.

// useState


import React, { useState } from "react";

const StateTutorial = () => {
        const [counter, setCounter] = useState(0);  // "counter - is a variable that we want to make and change. setCounter is a func that changes it on event. useState is a default value of a variable"

        const increment = () => {
                setCounter(counter + 1); // increments the value 
        };

return (

        <div>{counter}
        <button onClick={increment}>Increment</button>
        </div>
        
);
};

// 