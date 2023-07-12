import React from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Listings from './components/HomeListing/Listing';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
     <Filter />
     <Listings />
     <Footer />
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Filter from './components/Filter/Filter';
// import Listings from './components/HomeListing/Listing';
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <div className="sticky-container">
//         <Filter />
//       </div>
//       <div className="listings-container">
//         <Listings />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
