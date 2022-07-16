import { Component, useEffect, useState } from "react"


function Ue2() {
    const [count, setCount] = useState(0);
    const [Name, setName] = useState("Bharath")

    // useEffect(() => {
    //     document.title = `This is my Title ${count} ${Name}`
    // }) // Acts as both ComponentDidMount(),ComponentDidUpdate()

    // useEffect(() => {
    //     document.title = `This is my Title ${count} ${Name}`
    // }, []) // Acts as only ComponentDidMount() with the addition of []

    // useEffect(() => {
    //     document.title = `This is my Title ${count} ${Name}`
    // }, [Name]) // Acts as ComponentDidMount()and acts as ComponentDidUpdate() when the changes occurs in Name

    useEffect(() => {
        document.title = `This is my Title ${count} ${Name}`
    }, [Name, count]) // Acts as ComponentDidMount()and acts as ComponentDidUpdate() when the changes occurs in Name and count

    return (
        <div>
            <h1>This is Counter App with {count}</h1>
            <h1>{Name}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setName("Deva")}>Change Name</button>
        </div>
    )
}

export default Ue2