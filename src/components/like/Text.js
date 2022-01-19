import React, {useState} from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter (counter + 1)
    const reset = () => setCounter (0)

    return {
        counter,
        increase,
        reset
    }
}

export default function Texto () {
    const { counter, increase, reset} = useCounter();

    return (
        <div>
            <div><p className="textolike">{counter}</p></div>
            <button onClick={increase}>+</button>
            <button onClick={reset}>zero</button>
        </div>
    );
}