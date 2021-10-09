
import React, {useState} from 'react';
import MovieCard from "./MovieCard"
const Filter = props => {
  let movieList = [
    {
      Title:"LONDON O'CLOCK",
      Description:"Full Movie English Action Movies",
      Src:"https://i.ytimg.com/vi/Qc5sc0Wq8aU/maxresdefault.jpg",
      Rating:"2"
    },
    {
      Title:"Dying To Marry Him",
      Description:"Lifetime Movies Based On True Story",
      Src:"https://worldpakistan.net/wp-content/uploads/2021/10/Dying-To-Marry-Him-2021-Lifetime-Movies-2021-Based.jpg",
      Rating:"3"
    },
    {
      Title:"Wild Demons: Darkness Rises",
      Description:"Hollywood Thriller Movie In English",
      Src:"https://i.ytimg.com/vi/ePJqwsigMuU/maxresdefault.jpg",
      Rating:"3"
    },
    {
      Title:"Agent Scarlet",
      Description:"Full Movie English Action Movies",
      Src:"https://i.ytimg.com/vi/Xgm-Hij2vpc/maxresdefault.jpg",
      Rating:"1"
    },
    {
      Title:"Beauty and the Least",
      Description:"Full Movie English Comedy, Drama Movies",
      Src:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0c875605bf445d1a66e16b60420717a91bce9e22773551ec3dc37af229f48e11._RI_.jpg",
      Rating:"4"
    }
  ]
  const [title, setTitle] = useState("");
  let [searchMovie, setSearchMovie] = useState(movieList);
  const filterTitle = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = movieList.filter((movie) => {
        return movie.Title.toLowerCase().startsWith(keyword.toLowerCase());        
      });
      setSearchMovie(results);
    } else {
      setSearchMovie(movieList);      
    }
    setTitle(keyword);
  };
  const [rate, setRate] = useState(movieList);
  const filterRate = (e) => {
    const number = e.target.value;
    if (number !== '') {
      const results = movieList.filter((movie) => {
        return movie.Rating.toLowerCase().startsWith(number.toLowerCase());        
      });
      setSearchMovie(results);
    } else {
      setSearchMovie(movieList);      
    }
    setRate(number);
  };
  
  const handleClick = () => {
    let newTitle = prompt("Please enter Movie Title:");        
    let newDescription = prompt("Please enter Movie Description:");    
    let newSrc = prompt("Please enter Movie Link:");    
    let newRate = prompt("Please enter Movie Rate:");
       
    var results = [...searchMovie, {
      Title:newTitle,
      Description:newDescription,
      Src:newSrc,
      Rating:newRate
    }];   
    setSearchMovie(results);  
  }
  
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
     setIsChecked(!isChecked);
  }
  
    return (
        <div>
          <div>
            <div className="inputSearch">
            <label>Choose Filter:</label>
              <input type='checkbox' onChange={handleCheck} checked={!isChecked} id="titleCheck"/>
              <label>Title</label>
              <input type='checkbox' onChange={handleCheck} checked={isChecked} id="rateCheck"/>
              <label>Rate</label>
              <input type="search" placeholder="Enter Movies Title"  onChange={filterTitle} value={title} className="titleSearch"/>              
              <input type="number" placeholder="Enter Movies Rating"  onChange={filterRate} value={rate} className="rateSearch"/>
              </div>
              <div className="searchList">
                  {
                    searchMovie && searchMovie.length > 0 ? (
                      searchMovie.map((movie) => (                        
                        <div>
                          <MovieCard Src={movie.Src} Title={movie.Title} Description={movie.Description} Rating={movie.Rating}/>                          
                        </div>
                      ))
                    ) : (<h1>No results found!</h1>)
                  }
                   <div className="newCard">
                      <button onClick = {handleClick} >+</button>
                    </div>
                </div>
            </div>
          
          </div>
    );
};



export default Filter;