import React from 'react';
import { Carousel } from 'react-bootstrap';
import orcasPH from '../assets/orcasPH.jpeg';
import pointNoPointPH from '../assets/pointNoPointPH.jpeg';
import portGamblePH from '../assets/portGamblePH.jpeg';

const CarouselComp = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 fluid '
            src={pointNoPointPH}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Point No Point</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100 fluid'
            src={orcasPH}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Orcas Island</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100 fluid'
            src={portGamblePH }
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Port Gamble</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComp;