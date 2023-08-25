import React from 'react';
import pic from '../Images/Img2.jpg';

//import './CardGrid.css'; // You can define your own CSS for styling

const CardGrid = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={pic} className="card-img-top" alt="Image 1" />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">Some quick example text for Card 1.</p>
              <a href="#" className="btn btn-primary">Go Somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pic} className="card-img-top" alt="Image 2" />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">Some quick example text for Card 2.</p>
              <a href="#" className="btn btn-primary">Go Somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={pic} className="card-img-top" alt="Image 3" />
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">Some quick example text for Card 3.</p>
              <a href="#" className="btn btn-primary">Go Somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
