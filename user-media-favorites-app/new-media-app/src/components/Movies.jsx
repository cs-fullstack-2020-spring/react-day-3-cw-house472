import React, { Component } from 'react'


class Movies extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // console.log("the child component mounted")
    }
    render() {
        return (
            <div id = "movies">
                <h1>Favorite Movies</h1>
                {this.props.movies.map((movie, Index) => {
                    return (
                        <div key={Index}>
                            <p>First Movie : {movie.firstMov}</p>
                            <p>Second Movie : {movie.secondMov}</p>


                        </div>

                    )

                })}

            </div>
        )
    }
}

export default Movies;

