import { Component } from "react";
// import { movies } from '../movieData';
import axios from 'axios';


class MovieList extends Component {
    constructor(){
        super();
        this.state = {
            hover : "",
            pArr : [1],
            moviesArr : [] ,
            currPage : 1
        }
    }

    async componentDidMount(){
        // link format is https://api.themoviedb.org/3/movie/popular?api_key=7d5b0d8847ec640c12adf53166649843&language=en-US&page=1
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7d5b0d8847ec640c12adf53166649843&page=${this.state.currPage}`);
        console.log(res.data);
        this.setState({
            moviesArr : [...res.data.results]
        })

    }

    changeMovies = async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7d5b0d8847ec640c12adf53166649843&page=${this.state.currPage}`);
        console.log(res.data);
        this.setState({
            moviesArr : [...res.data.results]
        })
    }

    handlePrevious = () => {
        this.setState({
            // pArr : [...this.state.pArr.slice(1,this.state.pArr.length - 1)],
            currPage : this.state.currPage - 1,
        },this.changeMovies)
    }
    handleNext = ()=> {
        this.setState({
            pArr : [...this.state.pArr,this.state.pArr.length + 1],
            currPage : this.state.currPage + 1,
        },this.changeMovies)
    }
    
    render() {
        return (
            <>  
                <div>
                <h3 className="text-center"> <strong>Trending</strong> </h3>
                </div>
                <div className="movies-list">
                    {
                        this.state.moviesArr.map((movieEle) => (
                            <div className="card movie-card" onMouseEnter={()=>this.setState({hover : movieEle.id})} onMouseLeave = {()=> this.setState({hover:""})}>
                                <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ height: '40vh', width: '20vw' }} className="card-img-top" alt="..." />
                                <h5 className="card-title movie-title">{movieEle.title}</h5>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {this.state.hover == movieEle.id && (<a href="#" type="button" className="btn btn-primary movies-button">Add to Favourites</a>)}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="navigation-bar">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Previous</a></li>
                            {this.state.pArr.map((ele) => (
                                <li className="page-item"><a className="page-link" href="#">{ele}</a></li>
                            ))}
                            <li className="page-item"><a className="page-link" onClick={this.handleNext} >Next</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default MovieList; 