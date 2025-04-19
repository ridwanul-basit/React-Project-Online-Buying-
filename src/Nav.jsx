import React from 'react';
import { LuBellDot } from "react-icons/lu";
const Nav = () => {
    return (
        <div>
 <div className="md:flex justify-center place-items-center md:justify-evenly py-5">
  <div className="pb-5 md:pb-0">
    <h1 className='text-2xl text-[rgb(0,63,164)] font'>Auction<span className='text-[rgb(225,211,55)]'>Gallery</span></h1>
  </div>
  <div className=" flex  gap-3 lg:gap-7 font-semibold pb-5 md:pb-0">
   <div>Home</div>
   <div>Auctions</div>
   <div>Categories</div>
   <div>How To Works</div>
  </div>
  <div className="flex justify-center place-items-center gap-4"> 
  <div className='bg-[rgb(235,240,245)] p-2 rounded-full'>
  <LuBellDot size={25} />

    </div> 
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

  </div>
</div>
        </div>
    );
};

export default Nav;