import React, {useState, useEffect} from "react";


export default function Texto ({isLiked}) {

    const [counter, setCounter] = useState(1310);

    useEffect(() => {
        setCounter(isLiked ? counter + 1 : counter - 1)
      }, [isLiked])

    

    console.log (isLiked)
    return (
        <div>
            <div><p>{counter}</p></div>
        </div>
    );
}