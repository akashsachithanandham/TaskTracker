import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
import Header from './HeaderComponent';
//import FooterComponent from './FooterComponent';
import Navbar from './NavbarComponent';
class Landpage extends Component {
    state = {  }
    render() { 
        return (
          <React.Fragment>
             <div className="Lander" style={{marginBottom:"25px"}}> 
              <Navbar />
              <Header />
              <FooterComponent />
            </div>
          </React.Fragment>
        );
    }
}
 
export default Landpage;
