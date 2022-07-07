import React from 'react';
import './App.css';
import {Route, BrowseRouter as Router, Switch} from "react-router-dom";
import Home from "./Home";


function App(){
    return(
        // <div className="App">
        //     <header className="App-header">
        //         <source src="http://localhost:4000/movie">
        //         </source>
        //     </header> 
        // </div>


        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default App;