import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import SearchedMovie from './SearchedMovie'

function SearchForm({onSubmit,movieName, plot, img ,setbtn,btn,onUpdateHappy, onUpdateAngry}) {
  const [userInput, setUserInput] = useState('')
  const handleSearch=()=>{
    if(userInput.trim()!=''){
      onSubmit(userInput)
      setbtn(true)
      setUserInput('')

    }

  }
  return (
    <>
    <div className='bg-black rounded shadow-lg p-5 m-5'>
      <Row>
        <Col>
        <Form.Control placeholder='search by title' value={userInput} onChange={(e)=>{
          setUserInput(e.target.value)
        }}/>
        
        </Col>
        <Col>
        <Button onClick={handleSearch}>Search Movie</Button>
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>
       
      {btn ? (
        plot ? (
          <SearchedMovie movieName={movieName} plot={plot} img={img} onUpdateHappy={onUpdateHappy} onUpdateAngry={onUpdateAngry} setbtn={setbtn} />

        ):(<h1>No result Found</h1>)
      ):(<h1></h1>)}
      </div>
    </div>
    
    </>
  )
}

export default SearchForm