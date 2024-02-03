import React from 'react';
import background from "./Background.png";

const HomePage = () => {
   const myStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",   };
   return (
      <div style={myStyle}>
         <h4>Where is my Sure Walk?</h4>
      </div>
   );
}

export default HomePage;