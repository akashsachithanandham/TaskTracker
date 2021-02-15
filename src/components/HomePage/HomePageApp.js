import React, { Component } from 'react';
//import "../../App.css";
import Home from "./HomePage";
import NavbarPage from "../NavBar/NavBar";

class HomepageApp extends Component {
    //state = {  }
    render() { 
        return (<div className="App">
      
        <NavbarPage />
      
      <Home />
    </div>  );
    }
}
 
export default HomepageApp;
// function HomePageApp() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavbarPage />
//       </header>
//       <Home />
//     </div>
//   );
// }

//export default HomePageApp;
