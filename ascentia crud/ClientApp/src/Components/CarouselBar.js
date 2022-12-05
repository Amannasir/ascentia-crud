import Carousel from 'react-bootstrap/Carousel';

function CarouselBar() {
  return (
    <div>

    <Carousel >
      <Carousel.Item interval={1000}  style={{height:720}}>
        <img 
          className="d-block w-100 "
          src="https://www.teenaagnel.com/wp-content/uploads/2020/02/best-food-photographer-in-dubai.jpg"
          alt="First slide"
          
          />
        <Carousel.Caption>
          <h3 className='crauselContent'>Whether you wish to imporve your health</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{height:720}}>
        <img
          className="d-block w-100"
          src="https://rare-gallery.com/mocahbig/436129-food-sweets-fruit-berries-colorful-strawberries.jpg"
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3 className='crauselContent'>Lose weight or simply maintain a healthy diet</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:720}}>
        <img
          className="d-block w-100"
          src="https://monsoonphotography.co.za/wp-content/uploads/2021/03/food-photographer-pretoria-east-johannesburg-south-africa-monsoon-Egg-and-salad-on-Marble.jpg"
          alt="Third slide"
          />
        <Carousel.Caption>
          <h3 className='crauselContent' style={{color:"white"}}>ASCENTIA is just for you</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}

export default CarouselBar;