import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { CiHeart } from "react-icons/ci";

const Details = ({ auctions, loading, favorites, totalBids, onToggleFavorite,favoriteList }) => {
  if (loading) {
    return <div className="text-center py-8">Loading auctions...</div>;
  }

  return (
    <div className='w-11/12 mx-auto py-18'>
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[rgb(14,41,84)]">Active Auctions</h2>
      <p className="text-gray-600 mb-6">Discover and bid on extraordinary items</p>   
       
    </div>
      <div className="md:flex md:gap-3 ">
      <div className='md:w-4/6'>
      <table className="min-w-full bg-white rounded-lg overflow-hidden border-collapse">
        <thead className="border-b border-gray-200 ">
          <tr>
            <th className="py-3 px-4 text-left">Items</th>
            <th className="py-3 px-4 text-center">Current Bid</th>
            <th className="py-3 px-4 text-center">Time Left</th>
            <th className="py-3 px-4 text-center">Bid Now</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-[rgb(14,41,84)]">
          {auctions.map((item) => (
            <tr key={item.id}>
              <td className="py-4 px-4">
                <div className="flex items-center gap-4">
                  <div><img src={item.image} alt="" className='w-16 h-16 rounded' /></div>
  
                  <div>{item.title}</div>
                </div>
              </td>
              <td className="py-4 px-4 text-center">${item.currentBidPrice.toLocaleString()}</td>
              <td className="py-4 px-4 text-center ">{item.timeLeft}</td>
              <td className="py-4 px-4 text-center">
              <button 
                    onClick={() => onToggleFavorite(item.id)}
                    disabled={item.isFavorite} className={`
                      mr-2 text-xl
                      ${item.isFavorite ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {item.isFavorite ? '❤️' : '🤍'}
                  </button>
                  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='md:w-2/6 mt-5 md:mt-0'>
  <div className=" py-2 bg-gray-50 rounded-lg">
      <div className='flex gap-3 text-center border-b border-gray-200 pb-2 justify-center text-[rgb(14,41,84)]'>
        <CiHeart  size={28}  />
        <h3 className="text-2xl font-semibold ">Favorite Items</h3>
      </div>
      {favorites.length === 0 ? (
        <div className='text-center'><p className='text-xl font-semibold my-4'>No favorites yet</p>
        <p className='pb-3'> Click the heart icon on any item <br /> to add it to your favorites.</p> 
        <hr className="border-gray-200" />
        <div className="mt-6 flex justify-between  ">
          
            <div className='px-6'>
            <p className="text-lg font-semibold ">
              Total bids Amount 
            </p>
            </div>
          <div className='px-6'>
            <p className='text-lg font-semibold' >${totalBids.toLocaleString()}</p>
            </div>
          </div>
        
        </div>
        
      ) : (
        <ul className="space-y-2 my-3">
          {favorites.map(item => (
            <li key={item.id}>

              <div className='flex justify-between gap-3 py-3 px-6 text-[rgb(14,41,84)]'>
                <div className='flex gap-3'>
                <div>
                  <img src={item.image} alt="" className='w-16 h-16 rounded' />
                </div>
                <div>
                  <div className=''>
             <div >
                  <p className="">{item.title}</p> 
              <div className='flex gap-4 mb-3'>
              <div>
                <p>${item.currentBidPrice}</p>
              </div>
              <div>
                <p>Bids: {item.bidsCount}</p>
              </div>
              </div>
              </div>
              
                </div>
              
              </div>
                </div>
 
              <div className=''>
               <button className=' ml-2 shrink-0' onClick={()=>favoriteList(item.id)}>X</button>
              </div>
              </div> 
              <hr className="border-gray-200" />
            </li>
           
          ))}
           <div className="mt-6 flex justify-between px-6  ">
            <div className=''>
            <p className="text-lg font-semibold ">
              Total bids Amount 
            </p>
            </div>
          <div className=''>
            <p className='text-lg font-semibold' >${totalBids.toLocaleString()}</p>
            </div>
          </div>
          
        </ul>
      )}
    </div>
    
    
  </div>

    </div>
    </div>

  );
};

export default Details;