import React, { useState, useEffect } from 'react';

function ItemCount (){
    const [count, setCount] = useState(1);
    const increment = () => setCount(count + 1);
    const decrement = () => (count > 1 ? setCount(count - 1): setCount(1));

    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]);


    return (
        <div className="flex items-center gap-2">
        {/* Botón - */}
        <button className="btn btn-square" onClick={decrement}>-</button>

        {/* Contador */}
        <div className="p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown text-2xl font-mono">
            <span
                style={{ "--value": count }}
                aria-live="polite"
                aria-label={count.toString()}
            >
                {count}
            </span>
            </span>
        </div>

        {/* Botón + */}
        <button className="btn btn-square" onClick={increment}>+</button>
        </div>

    )
}

export default ItemCount;