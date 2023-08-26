import React, { useEffect } from 'react';
import pic from './Images/Bike.jpg'; 
import pic2 from './Images/Bike4.webp'; 
import pic3 from './Images/Bike6.jpg'; 

export default function BikeDoc() {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector('.carousel-control-next').click();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={pic2} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


