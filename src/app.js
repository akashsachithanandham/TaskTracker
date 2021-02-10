//import React from "react";
import Form from "./Form/Form";
import React, { Component } from 'react';
import Header from "./Header";

import "./App.css";
class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App text-white m-50">
        <Header />
        <Form />
      </div>
    );
  }
}
 
export default App;

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }

// export default App;
