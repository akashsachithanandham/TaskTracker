import React, { Component } from "react";
import bg from "./Assets/to-do-list-page-with-check-marks-and-pencil-concept-illustration-for-time-and-project-management-vector-illustration-template-in-flat-style.webp";


 

 class Header extends Component {
   render() {
     return (
       <div className="container">
         <div className="row">
           <div
             className="col"
             style={{
               alignContent: "left",
               alignItems: "left",
               justifyContent: "left",
             }}
           >
             <img
               src={bg}
               class="img-responsive"
               alt="Responsive image"
               style={{ maxWidth: "100%", height: "auto" }}
             />
           </div>
         </div>
         <div
           className="row"
           style={{ color: "black", textAlign: "center", fontSize: "30px" }}
         >
           <div className="col">
             <br />
             <br />
             <strong>Work your way out with &nbsp;</strong>
             <p>
               <span className="text" style={{ fontSize: "50px" }}>
                 Task
               </span>
               <span
                 className="text"
                 style={{ fontSize: "50px", color: "teal" }}
               >
                 Tracker
               </span>
             </p>
             <br />
             <p style={{ color: "black", textAlign: "left", fontSize: "26px" }}>
               It is a simple task manager tool that helps you to:
             </p>
             <div
               className="points"
               style={{ color: "black", textAlign: "left", fontSize: "20px" }}
             >
               &bull; Create the tasks to your team based on various features.
               <br />
               &bull; Filter and sort the alloted tasks.
               <br />
               &bull; Update the status of the tasks.
               <br />
              
             </div>
           </div>
         </div>
         <p style={{ color: "black", textAlign: "center", fontSize: "30px" }}>
           <br />
           Curious? Go, join your team by Signing up.
         </p>
       </div>
     );
   }
 }

 export default Header;