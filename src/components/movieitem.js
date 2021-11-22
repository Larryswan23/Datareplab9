import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from'axios'
// some comments
class MovieItem extends Component {

constructor(){
    super();
    this.DeleteMovie = this.DeleteMovie.bind(this);
}
DeleteMovie(){
   axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
   .then(()=>{
       this.props.ReloadData();
   })
   .catch();
}

    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.movie._id} className="btn btn-primary">Edit</Link>
<Button variant="danger" onClick={this.DeleteMovie}>  Delete </Button>           
               </Card>
            </div>
        );
    }
}
export default MovieItem;