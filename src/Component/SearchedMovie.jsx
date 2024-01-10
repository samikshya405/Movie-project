import React from "react";
import { Button } from "react-bootstrap";

function SearchedMovie({ movieName, plot, img, onUpdateHappy, onUpdateAngry ,setbtn }) {
  const handleHappy = () => {
    onUpdateHappy(movieName, plot, img);
  };
  const handleLazy = () => {
    onUpdateAngry(movieName, plot, img);
  };
  const handleDelete = () => {
    setbtn(false)
  };
  

  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img
        style={{ height: "300px" }}
        src={img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{movieName}</h5>
        <p className="card-text">{plot}</p>
        <div className="d-flex justify-content-between">
          <Button className="btn btn-warning" onClick={handleHappy}>
            Happy
          </Button>
          <Button className="btn btn-info" onClick={handleLazy}>
            Lazy
          </Button>
        </div>
        <Button className="btn btn-danger w-100 mt-2" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default SearchedMovie;
