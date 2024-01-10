import React from 'react'
import { Button } from 'react-bootstrap'

function Movie({movie, movieList, setMovielist}) {
  const handleDelete=()=>{
    const filteredList = movieList.filter(flim=>movie.name!=flim.name)
    setMovielist([...filteredList])
  }
  return (
    <div className="card m-4" style={{width: "18rem"}}>
  <img style={{height:"300px"}} src={movie.srcd} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <p className="card-text">{movie.des}</p>
    
    <Button className='btn btn-danger w-100 mt-2' onClick={handleDelete}>Delete</Button>
  </div>
</div>
  )
}

export default Movie