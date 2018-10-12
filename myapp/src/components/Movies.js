import React, { Component } from 'react';
class Movies extends Component {
    render() {
        const {movies} = this.props; 
        return ( 
            <ul>
                <li>
                    {movies.title}
                </li>
            </ul>
         );
    }
}
 
export default Movies;