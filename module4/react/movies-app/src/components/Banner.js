import { Component } from "react";



class Banner extends Component {
    render() {
        return (<div className="card banner-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6U_j8vXfmZ4WmOQQtHqi2n_qiEedg5aAN-w&usqp=CAU" className="card-img-top banner-img" alt="..."/>
            <h5 className="card-title banner-title">Card title</h5>
            <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>)
    }
}

export default Banner