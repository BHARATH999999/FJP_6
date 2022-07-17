import { useState } from "react"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"

function Signup(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("")

    function processSignUp(){
        let userCred = createUserWithEmailAndPassword(auth,email,password);
        console.log(userCred);
    }
    return(
        <>
            <input type="email" value = {email} onChange ={(e) =>setEmail(e.target.value)} placeholder = "email"></input><br></br>
            <input type="password" value = {password} onChange ={(e) =>setPassword(e.target.value)} placeholder = "password"></input><br></br>
            <input type="text" value = {name} onChange ={(e) =>setName(e.target.value)}placeholder = "Full Name"></input><br></br>
            <button type = "click" onClick={processSignUp}>Sign Up</button>
        </>
    )
}

export default Signup