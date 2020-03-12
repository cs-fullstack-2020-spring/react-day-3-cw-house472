import React, {Component} from 'react'


class Movies extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <p>My Favorite Movie is: {this.props.fav_Movie.firstMov} </p>
                <p>My Favorite Movie is: {this.props.fav_Movie.secondMov} </p>
            </div>
        )
    }
}

export default Movies;

