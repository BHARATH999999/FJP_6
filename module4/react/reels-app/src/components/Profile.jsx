import "./profile.css"

function Profile() {
    return (
        <>
            <div className="header"></div>
            <div className="main">
                <div className="profileImgContainer">
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1648218219.png" alt="" className="pimg" />
                </div>
                <div className="details">
                    <div className="content">Bharath</div>
                    <div className="content">No of posts: <span className="bold_text">Posts</span></div>
                    <div className="content">Email <span className="bold_text">Email.com</span></div>
                </div>
            </div>
        </>
    )
}

export default Profile