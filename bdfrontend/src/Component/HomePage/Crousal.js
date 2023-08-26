import pic from '../Images/Img2.jpg';
import CardGrid from './CardGrid';
export default function Crousal(){

    return (
        <div>
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>About Bike Doctor</h1>
        <p>Are you looking for a reliable and affordable bike service & repair? Look no further than our team of experienced and skilled professionals at Bike Mechanic. We are a top-rated bike repair shop in Pune with ratings of 4.7 and 140+ online reviews. We provide free pick-up and drop bike service since 2018, so you can rest assured that your bike is in good hands. We understand that your time is valuable, so we offer bike repair and service at your convenience. We also offer a wide range of services and accessories to choose from like periodic bike service, bike repair, spare parts replacement and battery and tyre replacement etc., so you can find the perfect one for your needs.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
    <CardGrid/>
</div>
</div>

    )
}