// import React from 'react';
// interface ListingCardProps {
//   listing: Listing;
//   currentSlide: number;
//   handleSlideChange: (index: number) => void;
// }

// interface Listing {
//   images: string[];
//   name: string;
//   host: string;
//   availableDates: string;
//   costPerNight: number;
//   averageRating: number;
// }

// const ListingCard: React.FC<ListingCardProps> = ({
//   listing,
//   currentSlide,
//   handleSlideChange,
// }) => {
//   return (
//     <div className="listing-card">
//       <div className="image-slider">
//         {listing.images.map((image, i) => (
//           <img
//             key={i}
//             src={image}
//             alt={`Listing - ${listing.name} - Image ${i + 1}`}
//             className={i === currentSlide ? 'active' : ''}
//             width={200}
//             height={150}
//           />
//         ))}
//         <div className="slide-controls">
//           {listing.images.map((_, i) => (
//             <button
//               key={i}
//               className={`slide-dot ${i === currentSlide ? 'active' : ''}`}
//               onClick={() => handleSlideChange(i)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="listing-details">
//         <h3>{listing.name}</h3>
//         <p>Host: {listing.host}</p>
//         <p>Dates Available: {listing.availableDates}</p>
//         <p>Cost Per Night: {listing.costPerNight}</p>
//         <p>Average Rating: {listing.averageRating}</p>
//       </div>
//     </div>
//   );
// };
// export default ListingCard;

import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';

interface ListingCardProps {
  listing: Listing;
}

interface Listing {
  images: string[];
  name: string;
  host: string;
  availableDates: string;
  costPerNight: number;
  averageRating: number;
  // currentSlide: number;
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % listing.images.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="listing-card">
      <div className="image-slider">
        <img
          src={listing.images[currentSlide]}
          alt={`Listing - ${listing.name} - Image ${currentSlide + 1}`}
          width={300}
          height={250}
          onClick={handleNextSlide}
          className="slider-image"
        />
        <div className="slide-arrow" onClick={handleNextSlide}>
          <RightOutlined />
        </div>
      </div>
      <div className="listing-details">
        <h3>{listing.name}</h3>
        <p>Host: {listing.host}</p>
        <p>Dates Available: {listing.availableDates}</p>
        <p>Cost Per Night: {listing.costPerNight}</p>
        <p>Average Rating: {listing.averageRating}</p>
      </div>
    </div>
  );
};

export default ListingCard;



