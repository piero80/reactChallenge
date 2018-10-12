import React, { Component } from 'react';
class Movies extends Component {
    render() {
        const {movies} = this.props; 
        return ( 
           
            <li>
                {movies.title}
            </li>
        
         );
    }
}
 
export default Movies;