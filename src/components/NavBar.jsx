import React from "react";
import {Link} from "react-router-dom";

function NavBar(props) {
  return (
      <div className="NavBar" style={props.navBarStyle}>
        <ul className="listContainer">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/about"> About</Link>
          </li>
          <li className="list" id="buttonWala">
            <button className="button" onClick={props.onClick}>
              change theme
            </button>
          </li>
        </ul>
      </div>
  );
}

export default NavBar;
