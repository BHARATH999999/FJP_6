import { Component } from "react";
// import { movies } from '../movieData';

class Fav extends Component {
    constructor() {
        super();
        this.state = {
            genres: [],
            currGenre: 'All genres',
            movies: [],
            movies2: [],
            currText: ""
        }
    }

    componentDidMount() {
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem('movies-app') || '[]')
        let tempArr = [];
        tempArr.push("All genres");
        data.map((movieObj) => {
            if (!tempArr.includes(genreIds[movieObj.genre_ids[0]])) {
                tempArr.push(genreIds[movieObj.genre_ids[0]])
            }
        })

        this.setState({
            movies: [...data],
            movies2: [...data],
            genres: [...tempArr]
        })
    }

    handleChangeGenre = (genre) => {
        this.setState({
            currGenre: genre
        }, this.filterMovies)
    }

    filterMovies = () => {
        let genre_ids = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem('movies-app') || '[]')
        if (this.state.currGenre == "All genres") {
            this.setState({
                movies: [...data],
                movies2: [...data],
            })
        }
        else {
            let filteredMovies = data.filter((movieObj) => genre_ids[movieObj.genre_ids[0]] == this.state.currGenre);
            this.setState({
                movies: [...filteredMovies],
                movies2: [...filteredMovies],
            })
        }
    }

    handleCurrText = (ele) => {
        this.setState({
            currText: ele
        }, this.searchMovies)
    }

    searchMovies = () => {
        if (this.state.currText != "") {
            let filteredArr = this.state.movies2.filter((movieObj) => {
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase());
            })

            this.setState({
                movies: [...filteredArr]
            })
        }
        else {
            let data = JSON.parse(localStorage.getItem('movies-app') || '[]')
            this.setState({
                movies: [...this.state.movies2]
            })
        }
    }

    sortPopularityInc = () => {
        let temp = this.state.movies.map((movieObj) => movieObj);
        temp.sort(function (objA, objB) {
            return objB.popularity - objA.popularity
        })

        this.setState({
            movies: [...temp],
            movies2: [...temp],
        })
    }
    sortPopularityDesc = () => {
        let temp = this.state.movies.map((movieObj) => movieObj);
        temp.sort(function (objA, objB) {
            return objA.popularity - objB.popularity
        })

        this.setState({
            movies: [...temp],
            movies2: [...temp],
        })
    }
    sortRatingInc = () => {
        let temp = this.state.movies.map((movieObj) => movieObj);
        temp.sort(function (objA, objB) {
            return objB.vote_average - objA.vote_average
        })

        this.setState({
            movies: [...temp],
            movies2: [...temp],
        })
    }
    sortRatingDec = () => {
        let temp = this.state.movies.map((movieObj) => movieObj);
        temp.sort(function (objA, objB) {
            return objA.vote_average - objB.vote_average
        })

        this.setState({
            movies: [...temp],
            movies2: [...temp],
        })
    }
    handleDelete = (movieEle) =>{
        let temp = JSON.parse(localStorage.getItem('movies-app'))
        temp = temp.filter((movie)=>movie.id!=movieEle.id)
        localStorage.setItem("movies-app",JSON.stringify(temp));
        this.setState({
            movies: [...temp],
            movies2: [...temp],
        })
    }
    render() {
        let genre_ids = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 ">
                            <ul className="list-group genre-selector">
                                {
                                    this.state.genres.map((genre) => (
                                        this.state.currGenre == genre ? (
                                            <li className="list-group-item active">{genre}</li>) :
                                            <li className="list-group-item" onClick={() => this.handleChangeGenre(genre)}>{genre}</li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="col-9 Fav-Table">
                            <div className="input-group" >
                                <input type="text" className="form-control col" placeholder="Search" value={this.state.currText} onChange={(e) => this.handleCurrText(e.target.value)} />
                                <input type="number" className="form-control col" />
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" >Title</th>
                                        <th scope="col" className = "text-center" style={{marginLeft : "3rem"}}>Genre</th>
                                        <th scope="col" className = "text-center"  style={{ display: "flex", justifyContent: "sapce-evenly", alignItems: "center" }}>
                                            <i className="fa fa-sort-up" style={{ marginTop: "0.5rem" ,marginLeft : "1.5rem"}} onClick={this.sortPopularityDesc}></i>
                                            Popularity
                                            <i className="fa fa-sort-down" onClick={this.sortPopularityInc}></i>
                                        </th>
                                        <th scope="col" className = "text-center">
                                            <div style={{ display: "flex", justifyContent: "sapce-evenly", alignItems: "center" }}>
                                            <i className="fa fa-sort-up " style={{ marginTop: "0.5rem",marginLeft : "2rem" }} onClick={this.sortRatingDec}></i>
                                            Rating
                                            <i className="fa fa-sort-down" onClick={this.sortRatingInc}></i>
                                            </div>
                                        </th>
                                        <th scope="col">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movies.map((movieEle) => (
                                            <tr>
                                                <th scope="row">
                                                    <img className="Fav_image" src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} />
                                                    {movieEle.title}</th>
                                                <td className = "text-center">{movieEle.genre_ids[0]}</td>
                                                <td className = "text-center">{movieEle.popularity}</td>
                                                <td className = "text-center">{movieEle.vote_average}</td>
                                                <td>
                                                    <button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(movieEle)}>delete</button>

                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Fav;