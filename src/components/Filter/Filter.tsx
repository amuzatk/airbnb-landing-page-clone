// import React, { useState } from "react";
// import "./Filter.css";

// const Filter: React.FC = () => {
//   const filterLists: string[] = [
//     "Amazing pools",
//     "Trending",
//     "Amazing views",
//     "Bed & breakfasts",
//     "Lake",
//     "Rooms",
//     "Mansions",
//     "Iconic cities",
//     "OMG!",
//     "Design",
//     "Domes",
//     "Boats",
//     "Chief's kitchens",
//     "Desert",
//     "Earth homes",
//     "Beachfront",
//     "Islands",
//     "Top of the world",
//     "Cycladic homes",
//     "Tropical",
//   ];

//   const iconMapping: { [key: string]: string } = {
//     "Amazing pools": "/assets/icons/pool.jpg",
//     Trending: "/assets/icons/trending.jpg",
//     "Amazing views": "/assets/icons/views.jpg",
//     "Bed & breakfasts": "/assets/icons/breakfast.jpg",
//     Lake: "/assets/icons/lake.jpg",
//     Rooms: "/assets/icons/rooms.jpg",
//     Mansions: "/assets/icons/mansions.jpg",
//     "Iconic cities": "/assets/icons/cities.jpg",
//     "OMG!": "/assets/icons/omg.jpg",
//     Design: "/assets/icons/designIcon.jpg",
//     Domes: "/assets/icons/domes.jpg",
//     Boats: "/assets/icons/boats.jpg",
//     "Chief's kitchens": "/assets/icons/kitchen.jpg",
//     Desert: "/assets/icons/desert.jpg",
//     "Earth homes": "/assets/icons/earth.jpg",
//     Beachfront: "/assets/icons/beachfront.jpg",
//     Islands: "/assets/icons/islands.jpg",
//     "Top of the world": "/assets/icons/top.jpg",
//     "Cycladic homes": "/assets/icons/cycladic.jpg",
//     Tropical: "/assets/icons/tropical.jpg",
//   };

//   const [activeFilter, setActiveFilter] = useState<string>(filterLists[0]);
//   const [showAllFilters, setShowAllFilters] = useState<boolean>(false);

//   const handleFilterClick = (filter: string) => {
//     setActiveFilter(filter);
//   };

//   const toggleFilterView = () => {
//     setShowAllFilters(!showAllFilters);
//   };

//   const renderFilters = (): JSX.Element => {
//     const visibleFilters = showAllFilters
//       ? filterLists
//       : filterLists.slice(0, 12);

//     return (
//       <div
//         className="filter-container"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "1rem 2rem",
//           marginBottom:'2rem',
//           borderTop:"1px solid #e8e8e8"
//         }}
//       >
//         {visibleFilters.map((filter, index) => {
//           const icon = iconMapping[filter];
//           const isLastFilter = index === visibleFilters.length - 1;
//           const isActive = activeFilter === filter;

//           return (
//             <div
//               key={filter}
//               className={`filter-item ${isActive ? "active" : ""}`}
//               onClick={() => handleFilterClick(filter)}
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 width: "50%",
//               }}
//             >
//               <div>
//                 <img
//                   width={25}
//                   height={25}
//                   src={icon}
//                   alt={filter}
//                 />
//                 <div
//                   style={{
//                     fontSize: "12px",
//                   }}
//                 >
//                   {filter}
//                 </div>
//               </div>
//               {isLastFilter && !showAllFilters && (
//                 <div className="arrow-icon" onClick={toggleFilterView}>
//                   <img
//                     src="/assets/icons/arrowRight.png"
//                     width={30}
//                     height={30}
//                   />
//                 </div>
//               )}
//             </div>
//           );
//         })}
//         <div>
//           <button
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "90px",
//               height: "45px",
//               cursor: "pointer",
//               background: "white",
//               borderRadius: "10px",
//               border: "1px solid #e8e8e8",
//             }}
//           >
//             <img src="/assets/icons/switchIcon.webp" width={25} height={20} />
//             Filters
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//     >
//       {renderFilters()}
//     </div>
//   );
// };

// export default Filter;

import React, { useState } from "react";
import "./Filter.css";

const Filter: React.FC = () => {
  const filterLists: string[] = [
    "Amazing pools",
    "Trending",
    "Amazing views",
    "Bed & breakfasts",
    "Lake",
    "Rooms",
    "Mansions",
    "Iconic cities",
    "OMG!",
    "Design",
    "Domes",
    "Boats",
    "Chief's kitchens",
    "Desert",
    "Earth homes",
    "Beachfront",
    "Islands",
    "Top of the world",
    "Cycladic homes",
    "Tropical",
  ];

  const iconMapping: { [key: string]: string } = {
    "Amazing pools": "/assets/icons/pool.jpg",
    Trending: "/assets/icons/trending.jpg",
    "Amazing views": "/assets/icons/views.jpg",
    "Bed & breakfasts": "/assets/icons/breakfast.jpg",
    Lake: "/assets/icons/lake.jpg",
    Rooms: "/assets/icons/rooms.jpg",
    Mansions: "/assets/icons/mansions.jpg",
    "Iconic cities": "/assets/icons/cities.jpg",
    "OMG!": "/assets/icons/omg.jpg",
    Design: "/assets/icons/designIcon.jpg",
    Domes: "/assets/icons/domes.jpg",
    Boats: "/assets/icons/boats.jpg",
    "Chief's kitchens": "/assets/icons/kitchen.jpg",
    Desert: "/assets/icons/desert.jpg",
    "Earth homes": "/assets/icons/earth.jpg",
    Beachfront: "/assets/icons/beachfront.jpg",
    Islands: "/assets/icons/islands.jpg",
    "Top of the world": "/assets/icons/top.jpg",
    "Cycladic homes": "/assets/icons/cycladic.jpg",
    Tropical: "/assets/icons/tropical.jpg",
  };

  const [activeFilter, setActiveFilter] = useState<string>(filterLists[0]);
  const [showAllFilters, setShowAllFilters] = useState<boolean>(false);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // Perform fetching logic...
  };

  const toggleFilterView = () => {
    setShowAllFilters(!showAllFilters);
  };

  const renderFilters = (): JSX.Element => {
    const visibleFilters = showAllFilters
      ? filterLists.slice(8)
      : filterLists.slice(0, 12); // Show 12 filters if `showAllFilters` is true

    return (
      <div
        className="filter-container"
        style={{
          padding: "16px 40px",
          marginBottom: "2rem",
          borderTop: "1px solid #e8e8e8",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // border:'1px solid blue'
          // border:'1px solid red'
        }}
      >
        {showAllFilters && (
          <div className="arrow-icon" onClick={toggleFilterView}>
            <img
              src="/assets/icons/leftArrow.svg"
              width={30}
              height={30}
              alt="Left Arrow"
            />
          </div>
        )}
        {visibleFilters.map((filter, index) => {
          const icon = iconMapping[filter];
          const isLastFilter = index === visibleFilters.length - 1;
          const isActive = activeFilter === filter;

          return (
            <div
              key={filter}
              className={`filter-item ${isActive ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
              style={{
                display: "flex",
                flexDirection: "row",
                width: "50%",
                // border:'1px solid red'
              }}
            >
              <div>
                <img width={25} height={25} src={icon} alt={filter} />
                <div
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {filter}
                </div>
              </div>
              {isLastFilter && !showAllFilters && (
                <div className="arrow-icon" onClick={toggleFilterView}>
                  <img
                    src="/assets/icons/arrowRight.png"
                    width={30}
                    height={30}
                    alt="Right Arrow"
                  />
                </div>
              )}
            </div>
          );
        })}
        <div>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "90px",
              height: "45px",
              cursor: "pointer",
              background: "white",
              borderRadius: "10px",
              border: "1px solid #e8e8e8",
            }}
          >
            <img src="/assets/icons/switchIcon.webp" width={25} height={20} />
            Filters
          </button>
        </div>
      </div>
    );
  };

  return <div>{renderFilters()}</div>;
};

export default Filter;
