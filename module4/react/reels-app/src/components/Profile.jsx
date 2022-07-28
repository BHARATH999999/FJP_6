import React, { useEffect, useState } from "react"
import "./profile.css"
import {useContext} from "react"
import {AuthContext} from "../context/Authcontext"
import {db} from "../firebase"
import {doc,getDoc} from "firebase/firestore"
import { async } from "@firebase/util"

function Profile(){
    let cUser = useContext(AuthContext);
    let [loading,setLoading] = useState("")

    useEffect(function(){
        (async function(){
            if(cUser){
                //Read from database
                const docRef = doc(db,"users",cUser.uid);
                const docSnap = await getDoc(docRef);
                console.log("Document Data : ",docSnap);
            }
        })()
    },[cUser])
    return (
            <>
                {cUser == null?<div>Need to login</div>:    
         <>
         <div className="header"></div>
         <div className="main">
             <div className="pimg_container">
                 <img src="https://assets.leetcode.com/users/avatars/avatar_1648218219.png" alt="" className="pimg" />
             </div>
             <div className="details">
                 <div className="content">Aman</div>
                 <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
                 <div className="content">Email <span className="bold_text">Email.com</span></div>
             </div>
         </div>
         </>}
        </>
    )
}

export default Profile