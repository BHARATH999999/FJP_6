import axios from "axios";
import { Component } from "react";
// import {movies} from "../movieData";
// import axios from "axios";



class Banner extends Component {
    constructor(){
        super();
        this.state = {
            movie : ""
        }
    }

    async componentDidMount(){
        const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=7d5b0d8847ec640c12adf53166649843')
        this.setState({
            movie : res.data.results[0]
        })
    }
    render() {

        // let movie = movies.results[Math.floor(Math.random()*movies.results.length)];
        let backdrop_path = this.state.movie.backdrop_path; 
        return (<div className="card banner-card">
            <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
            <h5 className="card-title banner-title">{this.state.movie.title}</h5>
            <p className="card-text banner-text">{this.state.movie.overview}</p>
        </div>)
    }
}

export default Banner