// import React, { useState } from "react";
// import { RightOutlined } from "@ant-design/icons";
// import { BsCurrencyDollar } from "react-icons/bs";
// import { AiTwotoneStar } from "react-icons/ai";
// import { PiHeart } from "react-icons/pi";


// interface ListingCardProps {
//   listing: Listing;
// }

// interface Listing {
//   images: string[];
//   name: string;
//   host: string;
//   availableDates: string;
//   costPerNight: number;
//   averageRating: number;
// }

// const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleNextSlide = () => {
//     const nextSlide = (currentSlide + 1) % listing.images.length;
//     setCurrentSlide(nextSlide);
//   };

//   const handleToggleFavorite = () => {
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <div className="listing-card" style={{ maxHeight: "460px" }}>
//       <div className="image-slider">
//         <img
//           src={listing.images[currentSlide]}
//           alt={`Listing - ${listing.name} - Image ${currentSlide + 1}`}
//           width={295}
//           height={300}
//           onClick={handleNextSlide}
//           className="slider-image"
//           style={{ borderRadius: "1rem" }}
//         />
//         <div className="slide-arrow" onClick={handleNextSlide}>
//           <RightOutlined style={{ display: "block" }} />
//         </div>
//         <div
//           className="heart-icon"
//           onClick={handleToggleFavorite}
//           style={{
//             position: "absolute",
//             top: "16px",
//             right: "32px",
//             fontSize: "25px",
//             cursor: "pointer",
//             color: isFavorite ? "blue" : "inherit",
//           }}
//         >
//           {isFavorite ? < PiHeart  /> : <PiHeart color='white'/>}
          
//         </div>
//       </div>
//       <div
//         className="listing-details"
//         style={{
//           display: "flex",
//           minHeight: "120px",
//           position: "relative",
//           paddingLeft: "20px",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           justifyContent: "left",
//         }}
//       >
//         <h4 style={{ position: "absolute", top: "-14px" }}>{listing.name}</h4>
//         <p style={{ position: "absolute", top: "10px", color: "#717171" }}>
//           Hosted by {listing.host}
//         </p>
//         <p style={{ position: "absolute", top: "30px", color: "#717171" }}>
//           {listing.availableDates}
//         </p>
//         <p
//           style={{
//             position: "absolute",
//             top: "55px",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {" "}
//           <BsCurrencyDollar fontSize={15} />
//           <b> {listing.costPerNight}</b> {" "} night
//         </p>
//         <p
//           style={{
//             position: "absolute",
//             top: "-14px",
//             right: "1rem",
//             gap: "5px",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <AiTwotoneStar fontSize={15} /> {listing.averageRating}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ListingCard;

import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { PiHeart } from "react-icons/pi";

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
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % listing.images.length;
    setCurrentSlide(nextSlide);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation(); // Prevent event bubbling to the parent container
  };

  return (
    <div className="listing-card" style={{ maxHeight: "460px" }}>
      <div className="image-slider">
        <img
          src={listing.images[currentSlide]}
          alt={`Listing - ${listing.name} - Image ${currentSlide + 1}`}
          width={295}
          height={300}
          onClick={handleImageClick}
          className="slider-image"
          style={{ borderRadius: "1rem" }}
        />
        <div className="slide-arrow" onClick={handleNextSlide}>
          <RightOutlined style={{ display: "block" }} />
        </div>
        <div
          className="heart-icon"
          onClick={handleToggleFavorite}
          style={{
            position: "absolute",
            top: "16px",
            right: "32px",
            fontSize: "25px",
            cursor: "pointer",
            color: isFavorite ? "blue" : "inherit",
          }}
        >
          {isFavorite ? <PiHeart /> : <PiHeart color="white" />}
        </div>
      </div>
      <div
        className="listing-details"
        style={{
          display: "flex",
          minHeight: "120px",
          position: "relative",
          paddingLeft: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        <h4 style={{ position: "absolute", top: "-14px" }}>{listing.name}</h4>
        <p style={{ position: "absolute", top: "10px", color: "#717171" }}>
          Hosted by {listing.host}
        </p>
        <p style={{ position: "absolute", top: "30px", color: "#717171" }}>
          {listing.availableDates}
        </p>
        <p
          style={{
            position: "absolute",
            top: "55px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <BsCurrencyDollar fontSize={15} />
          <b> {listing.costPerNight}</b> {" "} night
        </p>
        <p
          style={{
            position: "absolute",
            top: "-14px",
            right: "1rem",
            gap: "5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiTwotoneStar fontSize={15} /> {listing.averageRating}
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
