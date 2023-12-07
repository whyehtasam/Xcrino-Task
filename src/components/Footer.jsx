import React from 'react';
import '../assets/css/footer.css'
import Logo from '../assets/images/leaf.png'

const Footer = () => {
    return (
        <div>
            {/* <footer>
     <div className='ftrTop'>

     </div>
     <div className='ftrTop'>

     </div>
    </footer> */}

            <div class="footer">
                <div class="div">
                    <img class="img" src={Logo} />
                    <div class="div-2">
                        <div class="div-3">
                            <div class="text-wrapper">Product</div>
                            <div class="text-wrapper-2">Products</div>
                            <div class="text-wrapper-3">Pricing</div>
                            <div class="text-wrapper-4">Services</div>
                        </div>
                        <div class="div-4">
                            <div class="text-wrapper">Explore</div>
                            <div class="text-wrapper-5">New Offers</div>
                            <div class="text-wrapper-3">Review</div>
                            <div class="text-wrapper-6">Track</div>
                        </div>
                        <div class="div-5">
                            <div class="text-wrapper">Company</div>
                            <div class="text-wrapper-2">About us</div>
                            <div class="text-wrapper-7">Contact us</div>
                        </div>
                    </div>
                </div>
                {/* <div class="div-wrapper">
                    <div class="div-6">
                        <div class="div-7">
                            <p class="text-wrapper">© 2023 Welcome. All right reserved.</p>
                            <div class="text-wrapper-8">Privacy Policy</div>
                            <div class="text-wrapper-9">Terms of Service</div>
                        </div>
                        <img class="img" src="img/div.svg" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
