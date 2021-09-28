import React, { useState } from "react";
import "./header.css";
import companyLogo from "../img/logo.png";
import { NavLink, BrowserRouter } from "react-router-dom";
import hamburger from "../img/hamburger.svg";
import cross from "../img/cross.svg";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="header">
        <div>
          <img className="logo_img" src={companyLogo} alt="BigCo Inc. logo" />
        </div>
        <div>
          <nav className="navBar">
            <div className="navbar_button">
              <div className="navbar_logo_div" onClick={handleToggle}>
                {navbarOpen ? (
                  // <svg
                  //   width="30"
                  //   height="30"
                  //   viewBox="0 0 18 19"
                  //   fill="red"
                  //   xmlns="http://www.w3.org/2000/svg"
                  // >
                  //   <path
                  //     fill-rule="evenodd"
                  //     clip-rule="evenodd"
                  //     d="M8.9418 12.6228L14.7293 18.5484C15.3099 19.1475 15.6877 19.1536 16.2789 18.5484L17.4401 17.3593C18.009 16.777 18.0475 16.3948 17.4401 15.7728L11.3128 9.50024L17.4407 3.22765C18.0146 2.63811 18.0257 2.24024 17.4407 1.64065L16.2795 0.452067C15.6771 -0.164854 15.3049 -0.136355 14.7299 0.452067L8.9418 6.37764L3.15426 0.452625C2.57925 -0.135796 2.20708 -0.164295 1.60469 0.452625L0.443495 1.6412C-0.142133 2.2408 -0.131515 2.63867 0.443495 3.22821L6.57079 9.50024L0.443495 15.7728C-0.163926 16.3948 -0.131515 16.777 0.443495 17.3593L1.60413 18.5484C2.19032 19.1536 2.56807 19.1475 3.1537 18.5484L8.9418 12.6228Z"
                  //     fill="red"
                  //   />
                  // </svg>
                  <img style={{ width: "40px", height: "40px" }} src={cross} />
                ) : (
                  // <svg viewBox="0 0 100 100" width="30" height="30" fill="red">
                  //   <rect width="100" height="20"></rect>
                  //   <rect y="30" width="100" height="20"></rect>
                  //   <rect y="60" width="100" height="20"></rect>
                  // </svg>
                  // <div >
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={hamburger}
                  />
                  // </div>
                )}
              </div>
            </div>
            {/* <ul>...</ul> */}.
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
              <NavLink
                // to={link.path}
                // className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
                to=""
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                Home
              </NavLink>
              <NavLink
                // to={link.path}
                // className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
                to=""
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                About Us
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
