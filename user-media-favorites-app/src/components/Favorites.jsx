import React, {Component} from 'react'
import Movies from './Movies'
class Favorites extends Component {
    constructor(props) {
        super (props);
    }
    render(){
        let favoriteMovie = prompt ("What is your favorite movie?")
        let secondFavoriteMovie = prompt("What is your second favorite movie?")
        const fav_Movie = [{
            firstMov: favoriteMovie,
            secondMov: secondFavoriteMovie
        }]
         
        
        fav_Movie.push(favoriteMovie)
        
        return(
            <div>
                <h1>Sanity check</h1>
                
                {
                    fav_Movie.map(
                        (m)=>{
                            return <Movies movieList = {m}/> 
                        }
                    )
                    
                }
             
            </div>
        )
    }
}

    
       
        
        
           
                
              
                
            
           


export default Favorites;