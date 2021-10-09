import "./App.css";

import React, { Component } from 'react';
import MovieList from "./Components/MovieList";

class App extends Component {
  
    render() {
            
        return (
            <div className="App">
                <MovieList />                
            </div>
        );
    }
}

export default App;
