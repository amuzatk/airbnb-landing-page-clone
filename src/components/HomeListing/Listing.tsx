import React, { useState } from 'react';
import ListingCard from './ListingCard/ListingCard';
import { listingsData } from '../../data/data';
import StickyButton from '../Button/StickyButton';
import './Listing.css';

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
          currentSlide={currentSlide}
          handleSlideChange={handleSlideChange}
        />
      ))}
      <StickyButton linkTo="/map" buttonLabel="Show map" />
    </div>
  );
};

export default Listings;
