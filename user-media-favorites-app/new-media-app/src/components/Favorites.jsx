import React, {Component} from 'react'
import Movies from './Movies'
import Albums from './Albums'
class Favorites extends Component {
    constructor(props) {
        super (props)
        
    }
    render(){
        
        

        let favoriteMovie = prompt ("What is your favorite movie?")
        let secondFavoriteMovie = prompt("What is your second favorite movie?")
        let favoriteAlbum = prompt ("What is your favorite album?")
        let secondFavoriteAlbum = prompt("What is your second favorite album?")
        
        const fav_Movie = [{
            firstMov: favoriteMovie,
            secondMov: secondFavoriteMovie
        }]
        // console.log(fav_Movie)
        const fav_Album = [{
            firstAlbum: favoriteAlbum,
            secondAlbum: secondFavoriteAlbum
        }]
        
        
        return(
            <div id= "favorites">
                <h1>This is a List of Your Favorite movies and albums</h1>
                
                
             <Movies movies = {fav_Movie}/>
             <Albums albums = {fav_Album}/>
            </div>
        )
    }
}

    
       
        
        
           
                
              
                
            
           


export default Favorites;