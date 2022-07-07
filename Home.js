import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            movies:[]
        };
    }



    async componentDidMount(){
        try{
            const response = await fetch('http://localhost:4000/movies');
            const data = await response.json();
            this.setState({movies:[...data]});

        } catch(error){
            console.log(error);
        }
    }


    render(){
        return (
            <div className="App App-header">
                <div className="container">
                    <div className="row">
                        {this.state.movies.map(movie =>
                            <div className="col-md-4" key={movie.id}>
                                <div className="card border-0">
                                     <p>{movie.name}</p>
                                     <p>{movie.rating}</p>
                                     <p>{movie.release_date}</p>                                                             
                                </div>
                             </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }



}