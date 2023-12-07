import '../assets/css/landing.css';
import Button from './Button';

const Landing = () => {

    return (
        <div className='landing'>

            <div className='landing-text'>
               
                <div className="text-wrapper">Kids</div>
                <div className="TOYS-GAMES-STORE">TOYS &amp; GAMES STORE</div>
                <p className="p-text-wrapper">Explore Limited Edition Merchandise and Exclusive Offers</p>
                <Button text='BUY NOW' className='btn'/>
            </div>
        </div>
    )
}

export default Landing;