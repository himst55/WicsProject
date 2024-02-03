import React from 'react';
import background from "../Background.png";

const HomePage = () => {
   const imageStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-80px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
   };
   const headerStyle = {
      fontSize: "60px",
      padding: "30px 0px 0px 45px",
      color: "#00608a",
   };
   const textStyle = {
      fontSize: "20px",
      padding: "0px 0px 0px 45px",
      align: "top",
      color: "#00608a",
   };
   return (
      <div style={imageStyle}>
         <h4 style={headerStyle}>Where's my Sure Walk?</h4>
         <p style={textStyle}>Use your Sure Walk number to track how far away your Sure Walk is!</p>
      </div>
   );
}

export default HomePage;