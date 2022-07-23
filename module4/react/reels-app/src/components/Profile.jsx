import React from "react"
import "./profile.css"
import { useContext } from "react"
import {AuthContext} from "../context/Authcontext"

function Profile() {

    let cUser = useContext(AuthContext);
    return (
        <>
            {cUser == null ? <div>Need to Login</div> :
                <div> Logged in user is {cUser.uid}</div>}
        </>
        // <>
        //     <div className="header"></div>
        //     <div className="main">
        //         <div className="profileImgContainer">
        //             <img src="https://assets.leetcode.com/users/avatars/avatar_1648218219.png" alt="" className="pimg" />
        //         </div>
        //         <div className="details">
        //             <div className="content">Bharath</div>
        //             <div className="content">No of posts: <span className="bold_text">Posts</span></div>
        //             <div className="content">Email <span className="bold_text">Email.com</span></div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Profile