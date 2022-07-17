import { useState } from "react"


function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const trackEmail = function(e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = function(){
        alert(email + " " + password)
    }

    
    return(
        <>
        <input type = "email" placeholder="email" onClick={trackEmail}>{email}</input>
        <br></br>
        <input type="password" placeholder="password" onClick={trackPassword}></input>
        <br></br>
        <button type="click" onClick={printDetails}>Login</button>
        </>
    )
}

export default Login