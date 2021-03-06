import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth , db} from "../firebase"
import { doc, setDoc} from "firebase/firestore"

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState("");

    async function processSignUp() {
        try {
            setLoader(true);
            let userCred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db,"users",userCred.user.uid),{
                email,
                name,
                reelsIds : [],
                profileImgUrl : "",
                userId : userCred.user.uid
            })
            // console.log(userCred);
            setUser(userCred.user);
        }
        catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError("")
            }, 2000)
        }
        setLoader(false);
    }
    return (
        <>
            {error != "" ? <h1>{error}</h1> :
                loader == true ? <h1>...Loading</h1> :
                    user != "" ? <h1>user is {user.uid}</h1> :
                        <>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input><br></br>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input><br></br>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"></input><br></br>
                            <button type="click" onClick={processSignUp}>Sign Up</button>
                        </>
            }
        </>
    )
}

export default Signup