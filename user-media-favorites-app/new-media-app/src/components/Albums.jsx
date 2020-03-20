import React, {Component} from 'react'
class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        // console.log("the child component mounted")
    }
    render() {
        return (
            <div id = "albums">
                <h1>Favorite Albums</h1>
                {this.props.albums.map((album, Index) => {
                    return (
                        <div key={Index}>
                            <p>First Album : {album.firstAlbum}</p>
                            <p>Second Album : {album.secondAlbum}</p>


                        </div>

                    )

                })}

            </div>
        )
    }
}
 
export default Albums;