import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import { Button } from "../styles/Button";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar-lists {
      overflow: none;
      display: flex;
      gap: 5rem;
      align-items: center;
      filter: blur(0.5px);
      .navbar-link {
        &:link,
        &:visited {
          font-size: 1.8rem;
          font-weight: 500;
          color: white;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;

    }

    .close-outline {
      display: none;
    }
    .headbtn{
      width: 90px;
      height: 16px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {

      .mobile-navbar-btn {
        display: inline-block;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.hr};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: fixed;
        /* position: absolute; */
        top: 10%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        position:fixed;
        width: 100vw;
        height: 100vh;
        /* position: absolute; */
        top: 0;
        left: 0;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        transform-origin: top;
        transition: all 3s linear;
      }
      .active .navbar-lists {
        overflow: hidden;

        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.1s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .nav-link-btn{
        height: 70px;
        font-size: 30px;
        width: 300px;
      }
        
      }

    
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/abou"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Members
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              <Button className="nav-link-btn"> Contact Us</Button>
            </NavLink>

          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose style={{ color: "white" }}
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
