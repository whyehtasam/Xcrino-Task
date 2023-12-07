
// import React from 'react';
import '../assets/css/Intro.css'
import Button from './Button/Button';
// import styles from '../assets/css/btn.module.css';


const Intro = () => {
  return (
    <>
      <div className='Intro'>
        <h1 className='heading'>What we Offer ?</h1>
        <h2 className='subHeading'>Unleash the Magic of San-X Characters!</h2>
        <p className='para'>Embark on a whimsical journey with our exclusive range of San-X character products.  Immerse yourself in the charm of Rilakkuma, Sumikko Gurashi, Sentimental Circus, and more. <br></br>
          Discover a treasure trove of limited edition merchandise, from adorable plush toys to stylish accessories.<br></br>
          Explore our "Made to Order" and "Ltd. Merchandise" collections, where each item is crafted with precision and care. Indulge in the nostalgia of "Restock" favorites and stay ahead of trends with the latest releases in the "Released in December" category....</p>
          
        <Button className='readMore'> Read More</Button>
      </div>
    </>
  );
};

export default Intro;
