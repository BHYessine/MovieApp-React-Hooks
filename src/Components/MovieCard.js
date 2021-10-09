import React from 'react';

const MovieCard= props => {
    return (
        <div className="cardMovie">
            <img src={props.Src} width="300" height="180" alt=""/>            
            <h3>{props.Title} </h3>
            <h5>{props.Description}</h5>
            <h5>Rating: {props.Rating}/4 </h5>
        </div>
    );
};


export default MovieCard;