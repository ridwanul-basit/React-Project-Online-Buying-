import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Nav from './nav'
import Header from './Header'
import Footer from './footer'
import Details from './details';


function App() {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalBids, setTotalBids] = useState(0);
  const [favorites, setFavorites] = useState([]);

  // Fake API function
  const fetchAuctionData = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return[
      {
        id: 1,
        title: "Vintage Leica M3 Camera",
        description: "Rare 1954 Leica M3 with Summicron 50mm f/2 lens. Fully functional with minor signs of wear. Includes original leather case.",
        currentBidPrice: 2850,
        bidsCount: 12,
        timeLeft: "2 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/MDzx95vb/Bid1-min.png"
      },
      {
        id: 2,
        title: "1965 Gibson SG Standard Electric Guitar",
        description: "Cherry red Gibson SG from the golden era of rock. All original components with pristine frets. Owned by a touring musician in the 70s.",
        currentBidPrice: 6700,
        bidsCount: 8,
        timeLeft: "3 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/8nDkMQVd/Bid2-min.png"
      },
      {
        id: 3,
        title: "Original Apple Macintosh 128k (1984)",
        description: "First-generation Macintosh in working condition. Includes original mouse, keyboard, and system disks. Perfect for collectors.",
        currentBidPrice: 4200,
        bidsCount: 15,
        timeLeft: "5 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/jCDG017/Bid3-min.png"
      },
      {
        id: 4,
        title: "Rolex Submariner 16610",
        description: "1998 Rolex Submariner with black dial. Serviced in 2022 with papers. Includes original box and warranty card.",
        currentBidPrice: 8900,
        bidsCount: 22,
        timeLeft: "7 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/vvMqQ8XB/Bid4-min.png"
      },
      {
        id: 5,
        title: "First Edition 'The Great Gatsby' by F. Scott Fitzgerald",
        description: "1925 first printing with original dust jacket. Excellent condition with minor shelf wear. Certificate of authenticity included.",
        currentBidPrice: 12500,
        bidsCount: 5,
        timeLeft: "2 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/gMMb9nkQ/Bid6-min.png"
      },
      {
        id: 6,
        title: "Mid-Century Modern Eames Lounge Chair",
        description: "Authentic 1956 Herman Miller Eames lounge chair with ottoman. Black leather with rosewood veneer. Complete restoration in 2020.",
        currentBidPrice: 3800,
        bidsCount: 9,
        timeLeft: "6 Days left",
        isFavorite: false,
        image: "https://i.ibb.co.com/QyKNmj5/Bid5-min.png"
      },
      // Additional items can follow the same structure
    ];
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchAuctionData();
        setAuctions(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching auction data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const toggleFavorite = (id) => {
    const updatedAuctions = auctions.map(auction => 
      auction.id === id ? { ...auction, isFavorite: !auction.isFavorite } : auction 
    );
    let tBid=0
    for(const acc of auctions){
      if (acc.id===id){
        tBid= tBid+parseInt(acc.currentBidPrice);
      };
    };
    toast.success("Item added for favorite list");
    setTotalBids( totalBids + tBid)   
    setAuctions(updatedAuctions);
    setFavorites(updatedAuctions.filter(item => item.isFavorite));
    
  };

  const favoriteList = (id)=>{
  const updatedAuctions = auctions.map(auction => 
    auction.id === id ? { ...auction, isFavorite: !auction.isFavorite } : auction 
  );
  for(const acc of auctions){
    if (acc.id===id){
      setTotalBids( totalBids - parseInt(acc.currentBidPrice)) 
    };
  };  
  toast.warn("Item removed from favorite list");
  setAuctions(updatedAuctions);
  setFavorites(updatedAuctions.filter(item => item.isFavorite));

};
// const notify = () => toast.success("Item added for favorite list");

  

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <main className="bg-gray-100 ">
      <Details auctions={auctions} 

          loading={loading}
          favorites={favorites}
          totalBids={totalBids}
          onToggleFavorite={toggleFavorite}
          favoriteList={favoriteList}>
        
      </Details>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
