import React from 'react';
// import headerBg from './assets/Banner-min.jpg';

const Header = () => {
    return (
        <div className="bg-[url('./assets/Banner-min.jpg')] bg-cover bg-center bg-no-repeat w-full h-screen filter contrast-105 brightness-95 ">
            <div className='px-6 md:px-0 md:w-1/2 grid place-content-center h-full '>
                <div>
                <h1 className='text-4xl text-white pb-8 font-bold'>Bid on Unique Items from <br />Around the World</h1>
                <p className='text-white opacity-80 pb-10'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='btn px-10 rounded-2xl'>Explore actions</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default Header;