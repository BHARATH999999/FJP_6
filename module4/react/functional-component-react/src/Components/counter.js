import { useState } from "react"


function Counter(){
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");

    return(
        <>
            <h1> This is a Counter App {count}</h1>
            <div>
            <button onClick={() =>setCount(count + 1)}>+</button>
            <button onClick={() =>setCount(count - 1)}>-</button>
            </div>
            <div>
            <input value={text} onChange = {(e) => setText(e.target.value)}></input>
            <h1>{text}</h1>        
            </div>
        </>
    )
}
export default Counter