import React, { useState } from "react";
import {Link} from "react-router-dom";
const Navbar =()=> {
   const [mode, setMode] = useState('light');
  // constructor(){
  //   super();
  //   this.state={
  //         mode:'light'

  //   }
  // }
    const toggleMode = () => {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "rgb(1, 25, 57)";
        document.body.style.color = "black";
        document.body.card.style.backgroundColor ="black";

      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    };
  
    return (
      <div className="topNav">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="setCol navbar-brand" to="/">
              <b>SK.News</b>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbutton navbar-toggler-icon"></span>
    </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="setCol nav-link " aria-current="page" href="/">Home</a>
                </li> */}
                <li className="nav-item"><Link className="setCol nav-link" to="/">General</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/law">Law</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="setCol nav-link" to="/about">About</Link></li>
              </ul>
            </div>
            <div className="dark">
<div className="form-check form-switch form-check-reverse">
  <input className="form-check-input" onClick={toggleMode} type="checkbox"  id="flexSwitchCheckReverse"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckReverse">DarkMode</label>
</div>
</div>
          </div>
       
        </nav>

      </div>
    );
  
}

export default Navbar;
