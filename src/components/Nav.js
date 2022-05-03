import React from "react";
import logo2 from "../logo2.png"

function Nav() {
    return (
        <div>
            <div class="nav">
                <div>
                    <img class="logo" src={logo2} alt="My logo" />
                </div>
                <div>
                    <h1 class="title">Schedule Builder</h1>
                </div>
            </div>
        </div>
  
    );
}

export default Nav;