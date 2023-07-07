// import React, { useState } from 'react';
// import ListingCard from './ListingCard/ListingCard';
// import { listingsData } from '../../data/data';

// const Listings: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSlideChange = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="listings-container">
//       {listingsData.map((listing, index) => (
//         <ListingCard
//           key={index}
//           listing={listing}
//         />
//       ))}
//     </div>
//   );
// };

// export default Listings;

import React, { useState } from 'react';
import ListingCard from './ListingCard/ListingCard';
import { listingsData } from '../../data/data';
import './Listing.css'; // Import the Listings component CSS file

const Listings: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="listings-container">
      {listingsData.map((listing, index) => (
        <ListingCard
          key={index}
          listing={listing}
          // currentSlide={currentSlide}
          // handleSlideChange={handleSlideChange}
        />
      ))}
    </div>
  );
};

export default Listings;
