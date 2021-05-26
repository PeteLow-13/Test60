import React from 'react';
import CarouselComponent from '../components/CaouselComponent';

const LocationScreen = () => {
  return (
    <>
      <iframe
        width='863'
        height='485'
        src='https://www.youtube.com/embed/5BHBZr3OuRQ'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <h2>Location Screen</h2>
      <h3>About the location</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
        atque fugit pariatur natus praesentium fuga, cumque commodi dolorum
        rerum sunt vitae voluptatum placeat consectetur dolores, dolore maxime
        voluptates quia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, mollitia
        atque fugit pariatur natus praesentium fuga, cumque commodi dolorum
        rerum sunt vitae voluptatum placeat consectetur dolores, dolore maxime
        voluptates quia.
      </p>
      <h3>Things to do</h3>
      <ol>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
        <li>Thing 4</li>
      </ol>
      <CarouselComponent />
    </>
  );
};

export default LocationScreen;
