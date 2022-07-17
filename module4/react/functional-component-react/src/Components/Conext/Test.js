import React from "react";
let context = React.createContext(null);

function Test(){
    const [firstName,setFirstName] = useState("Adam");
    const [lastName,setLastName] = useState("Smith");

    <context.provider value ={{firstName,lastName}}>
    <h1>This is a Parent Component</h1>
    <ChildA/>
    </context.provider>
}

function ChildA(){
    return(
        <>
        <h1>This is Child A</h1>
        <ChildB/>
        </>
    )
}

function ChildB(){
    return(
        <>
        <h1>This is Child A</h1>
        <ChildC/>
        </>
    )
}

function ChildC(){
    const {firstName,lastName} = useContext(context);
    return(
        <>
        <h1>This is Child A</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </>
    )
}

export default Test;