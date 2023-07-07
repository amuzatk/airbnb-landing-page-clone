import React, { useState } from "react";

const Filter: React.FC = () => {
  const filterLists: string[] = [
    "Shared Homes",
    "OMG",
    "D",
    "L",
    "C",
    "E",
    "F",
    "H",
    "G",
    "I",
    "Unshared",
    "O",
    "Y",
    "Z",
    "W",
    "N",
    "P",
    "Q",
    "S",
    "T",
  ];

  const iconMapping: { [key: string]: string } = {
    "Shared Homes": "/assets/icons/designIcon.jpg",
    OMG: "/assets/icons/designIcon.jpg",
    D: "/assets/icons/designIcon.jpg",
    L: "/assets/icons/designIcon.jpg",
    C: "/assets/icons/designIcon.jpg",
    E: "/assets/icons/designIcon.jpg",
    F: "/assets/icons/designIcon.jpg",
    H: "/assets/icons/designIcon.jpg",
    G: "/assets/icons/designIcon.jpg",
    I: "/assets/icons/designIcon.jpg",
    Unshared: "/assets/icons/designIcon.jpg",
    O: "/assets/icons/designIcon.jpg",
    Y: "/assets/icons/designIcon.jpg",
    Z: "/assets/icons/designIcon.jpg",
    W: "/assets/icons/designIcon.jpg",
    N: "/assets/icons/designIcon.jpg",
    P: "/assets/icons/designIcon.jpg",
    Q: "/assets/icons/designIcon.jpg",
    S: "/assets/icons/designIcon.jpg",
    T: "/assets/icons/designIcon.jpg",
  };

  const [activeFilter, setActiveFilter] = useState<string>(filterLists[0]); // Default active filter is the first one

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // Perform fetching logic for the selected filter and update the home listings
    // You can use an API call or a pre-defined data set to fetch the new listings based on the filter
    // Update the listings using the fetched data
  };

  const renderFilters = (): JSX.Element => {
    return (
      <div className="filter-container" style={{display:'flex', flexDirection:'row'}}>
        {filterLists.map((filter) => {
          const icon = iconMapping[filter];
          return (
            <div
              key={filter}
              className={`filter-item ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              <img className="filter-icon" src={icon} alt={filter} />
              {filter}
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{renderFilters()}</div>;
};

export default Filter;
