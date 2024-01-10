import React, { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './Component/SearchForm'
import MovieContainer from './Component/MovieContainer'
function App() {

  const [SearchedMovie,SetSearchedMovie] = useState('')
  const [allMovie, setAllMovie] = useState([])
  const [imgSrc, setImgSrc] = useState('')
  const [description, setDescription] = useState('')
  const [movie, setmovie] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)
  const url =`https://www.omdbapi.com/?apikey=1c49254a&t=${SearchedMovie}`


  const updateSearchList=  (movieName)=>{
    SetSearchedMovie(movieName)
    setButtonClicked(true)
  }
  const insertHappyMovie=(movieName,plot,img)=>{
    const eachMovieDetail = {name:movieName , des:plot, srcd:img, category:"happy"}
    setAllMovie([...allMovie, eachMovieDetail])
    setButtonClicked(false)

  }
  const insertAngryMovie=(movieName,plot,img)=>{
    const eachMovieDetail = {name:movieName , des:plot, srcd:img, category:"angry"}
    setAllMovie([...allMovie, eachMovieDetail])
    setButtonClicked(false)

  }

  const fetchMovie= async()=>{
    let response = await fetch(url)
    let data = await response.json()
    setmovie(data.Title)
    setImgSrc(data.Poster)
    setDescription(data.Plot)
  }

  useEffect(()=>{
    fetchMovie()
    
  },[movie,url])
  

  return (
    <>
    <h1 className='text-center pt-3'>My Movie Collection</h1>
   
    <SearchForm onSubmit={updateSearchList} movieName={movie} plot={description} img={imgSrc} setbtn={setButtonClicked} btn={buttonClicked} onUpdateHappy={insertHappyMovie} onUpdateAngry={insertAngryMovie}  />
    
    <MovieContainer movieList={allMovie} setMovielist={setAllMovie} />

    </>
  )
}

export default App