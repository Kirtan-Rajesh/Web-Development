import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer>
    <p>Made By The Great Kirtan !! {currentYear}</p>
   </footer>
    );
}

export default Footer;
