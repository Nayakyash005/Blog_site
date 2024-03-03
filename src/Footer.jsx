import React from "react";

function Footer() {
    const time = new Date().getFullYear();
    return(
        <footer>
            <div className="foot-style">
            <p> copyright @{time}</p>
            </div>
        </footer>
    )
}

export default Footer;