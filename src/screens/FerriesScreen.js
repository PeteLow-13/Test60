import React from 'react';
import ferryPH from '../assets/ferryPH.jpeg';

const FerriesScreen = () => {
    return (
        <div>
            <h2>Ferries Landing Page</h2> 
            <img
            className='d-block w-100 fluid rounded'
            src={ferryPH}
            alt='First slide'
          />
            <p className='text-center'>Learn more about Washington State <a href='https://wsdot.wa.gov/ferries' target='blank'>Ferries here</a></p>
        </div>
    )
}

export default FerriesScreen
