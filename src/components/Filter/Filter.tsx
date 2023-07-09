// import React, { useState } from "react";

// const Filter: React.FC = () => {
//   const filterLists: string[] = [
//     "Shared Homes",
//     "OMG",
//     "D",
//     "L",
//     "C",
//     "E",
//     "F",
//     "H",
//     "G",
//     "I",
//     "Unshared",
//     "O",
//     "Y",
//     "Z",
//     "W",
//     "N",
//     "P",
//     "Q",
//     "S",
//     "T",
//   ];

//   const iconMapping: { [key: string]: string } = {
//     "Shared Homes": "/assets/icons/designIcon.jpg",
//     OMG: "/assets/icons/designIcon.jpg",
//     D: "/assets/icons/designIcon.jpg",
//     L: "/assets/icons/designIcon.jpg",
//     C: "/assets/icons/designIcon.jpg",
//     E: "/assets/icons/designIcon.jpg",
//     F: "/assets/icons/designIcon.jpg",
//     H: "/assets/icons/designIcon.jpg",
//     G: "/assets/icons/designIcon.jpg",
//     I: "/assets/icons/designIcon.jpg",
//     Unshared: "/assets/icons/designIcon.jpg",
//     O: "/assets/icons/designIcon.jpg",
//     Y: "/assets/icons/designIcon.jpg",
//     Z: "/assets/icons/designIcon.jpg",
//     W: "/assets/icons/designIcon.jpg",
//     N: "/assets/icons/designIcon.jpg",
//     P: "/assets/icons/designIcon.jpg",
//     Q: "/assets/icons/designIcon.jpg",
//     S: "/assets/icons/designIcon.jpg",
//     T: "/assets/icons/designIcon.jpg",
//   };

//   const [activeFilter, setActiveFilter] = useState<string>(filterLists[0]);

//   const handleFilterClick = (filter: string) => {
//     setActiveFilter(filter);
//   };

//   const renderFilters = (): JSX.Element => {
//     return (
//       <div className="filter-container" style={{display:'flex', flexDirection:'row'}}>
//         {filterLists.map((filter) => {
//           const icon = iconMapping[filter];
//           return (
//             <div
//               key={filter}
//               className={`filter-item ${
//                 activeFilter === filter ? "active" : ""
//               }`}
//               onClick={() => handleFilterClick(filter)}
//             >
//               <img className="filter-icon" src={icon} alt={filter} />
//               {filter}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   return <div>{renderFilters()}</div>;
// };

// export default Filter;

import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import "./Filter.css"; // Import the CSS file for styling (create Filter.css in the same directory)

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
    "Trending": "/assets/icons/trending.jpg",
    "Amazing views": "/assets/icons/views.jpg",
    "Bed & breakfasts": "/assets/icons/breakfast.jpg",
    "Lake": "/assets/icons/lake.jpg",
    "Rooms": "/assets/icons/rooms.jpg",
    "Mansions": "/assets/icons/mansions.jpg",
    "Iconic cities": "/assets/icons/cities.jpg",
    "OMG!": "/assets/icons/omg.jpg",
    "Design": "/assets/icons/designIcon.jpg",
    "Domes": "/assets/icons/domes.jpg",
    "Boats": "/assets/icons/boats.jpg",
    "Chief's kitchens": "/assets/icons/kitchen.jpg",
    "Desert": "/assets/icons/desert.jpg",
    "Earth homes": "/assets/icons/earth.jpg",
    "Beachfront": "/assets/icons/beachfront.jpg",
    "Islands": "/assets/icons/islands.jpg",
    "Top of the world": "/assets/icons/top.jpg",
    "Cycladic homes": "/assets/icons/cycladic.jpg",
    "Tropical": "/assets/icons/tropical.jpg",
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
      ? filterLists
      : filterLists.slice(0, 12); // Show all filters if `showAllFilters` is true

    return (
      <div className="filter-container" style={{display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center', padding:'0 2rem'}}>
        {/* <div style={{display:'flex', flexDirection:'row', backgroundColor:'yellow', width:'80%'}}> */}
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
                display:'flex',
                flexDirection:'row',
                // border:'1px solid yellow',
                width:'50%'
              }}
            >
              <div>
              <img
                className="filter-icon"
                width={25}
                height={25}
                src={icon}
                alt={filter}
              />
              <div style={{fontSize:'12px'}}>
              {filter}
              </div>
              </div>
              {isLastFilter && !showAllFilters && (
                <div className="arrow-icon" onClick={toggleFilterView}
                style={{
                  borderRadius:'50%',
                  border:'1px solid red',
                  fontSize:'12px'
                
                }}
                >
                  <RightOutlined />
                </div>
              )}
            </div>
          );
        })}
        {/* </div> */}
        {/* {visibleFilters.map((filter, index) => {
          const icon = iconMapping[filter];
          const isLastFilter = index === visibleFilters.length - 1;
          const isActive = activeFilter === filter;

          return (
            <div
              key={filter}
              className={`filter-item ${isActive ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              <img
                className="filter-icon"
                width={30}
                height={30}
                src={icon}
                alt={filter}
              />
              {filter}
              {isLastFilter && !showAllFilters && (
                <div className="arrow-icon" onClick={toggleFilterView}>
                  <RightOutlined />
                </div>
              )}
            </div>
          );
        })} */}
        <div>
          <button style={{display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <RightOutlined />
            Filters
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
    // style={{border:'1px solid green'}}
    >
      {renderFilters()}
    </div>
  );
};

export default Filter;
