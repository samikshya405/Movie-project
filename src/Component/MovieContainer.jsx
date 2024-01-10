import React, { useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import SearchedMovie from "./SearchedMovie";
import Movie from "./Movie";

function MovieContainer({ movieList,setMovielist }) {
  const [happy, sethappy] = useState(false)
  const [angry, setangry] = useState(false)
  const [all, setall] = useState(true)
  const happyMovie = movieList.filter(movie=>movie.category==="happy")
  const angryMovie = movieList.filter(movie=>movie.category ==="angry")
  
  var len = all ? movieList.length : (happy ? happyMovie.length : (angry ? angryMovie.length : false));
  
  const handleHappy=()=>{
    sethappy(true)
    setangry(false)
    setall(false)
   
   

  }
  const handleLazy=()=>{
    setangry(true)
    sethappy(false)
    setall(false)
    
  }
  const handleAll =()=>{
    setall(true)
    setangry(false)
    sethappy(false)
    
  }
 

  
  return (
    <>
      <div className="bg-black rounded shadow-lg p-5 m-5">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button type="button" className="btn btn-primary" onClick={handleAll} >
            All
          </Button>
          <Button type="button" className="btn btn-warning" onClick={handleHappy}>
            Happy
          </Button>
          <Button type="button" className="btn btn-info" onClick={handleLazy}>
            Lazy
          </Button>
        </div>
        <p className="p-2 text-white">{len} Movies Found!</p>
        <hr className="text-white" />
        <div className="d-flex flex-wrap">
          {all ? (
            movieList.map(movie=>{
              return <Movie key={movie.name} movie={movie} movieList={movieList} setMovielist={setMovielist} />
            })
            
          ):(
            happy ? (
              happyMovie.map(movie=>{
                return <Movie key={movie.name} movie={movie} movieList={movieList} setMovielist={setMovielist} />
              })

            ):(
              angry ? (
                angryMovie.map(movie=>{
                  return <Movie key={movie.name} movie={movie} movieList={movieList} setMovielist={setMovielist} />

                })
              ):(<h1>nothing to display</h1>)
            )
          )}
        
        </div>
        
      </div>
    </>
  );
}

export default MovieContainer;
