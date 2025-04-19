import React from 'react';

const Footer = () => {
    return (
        <div className='my-12 place-items-center justify-center'>
            <div className="py-3">
                <h1 className='text-3xl text-[rgb(0,63,164)] font'>Auction<span className='text-[rgb(225,211,55)]'>Gallery</span></h1>
            </div>
            <div className=" flex  gap-3 lg:gap-7 font-semibold text-2xl py-3">
                <div><h1>Bid.</h1></div>
                <div><h1>Win.</h1></div>
                <div><h1>Own.</h1></div>
            </div>
            <div className="flex  gap-3 lg:gap-7 font-semibold py-3">
                <div>Home</div>
                <div>Auctions</div>
                <div>Categories</div>
                <div>How To Works</div>
            </div>
            <div>
                <p>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        <div>

        </div>

            
        </div>
    );
};

export default Footer;