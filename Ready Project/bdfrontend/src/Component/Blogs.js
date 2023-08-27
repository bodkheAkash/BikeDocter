import React from 'react';
import pic from './Images/Bike.jpg';
import pic1 from './Images/RepairingCenter.jpg';
import pic2 from './Images/Kawasaki.jpg';
import pic3 from './Images/DaimlerReitwagen.jpg';
import pic4 from './Images/Kawasaki.jpg';


const Blogs = () => {
  return (
    <div className='container my-5'>
    <div class="card-group">
  <div class="card">
    <img src={pic1} class="card-img-top" alt="..."/>
    <div class="row h-100 justify-content-center align-items-center">
    <h4 class="card-title"></h4>
      <p class="card-text">.......</p>
      <p class="card-text"><small class="text-body-secondary">Get in touch with: akashbodhkebikedoc@gmail.com</small></p>
    </div>
  </div>
  <div class="card">
    <img src={pic2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Deepak Singh</h5>
      <p class="card-text">......</p>
      <p class="card-text"><small class="text-body-secondary">Get in touch with: singhdeepaksinghbikedoc@gmail.com</small></p>
    </div>
  </div>
  <div class="card">
    <img src={pic3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Oldest</h5>
      <p class="card-text">......</p>
      <p class="card-text"><small class="text-body-secondary">Get in touch with: aniketkhavnekarbikedoc@gmail.com</small></p>
    </div>
    
  </div>
  <div class="card">
    <img src={pic4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Fastest</h5>
      <p class="card-text">.......</p>
      <p class="card-text"><small class="text-body-secondary">Get in touch with: rutvijmahamunibikedoc@gmail.com</small></p>
    </div>

</div>
</div>
</div>
  );
};

export default Blogs;
