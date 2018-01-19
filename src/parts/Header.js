import React from "react";
import styled from "styled-components";
import { lighten, rem } from "polished";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  font-weight: bold;

  .brand {
    display: block;
    height: 10rem;
    margin: auto;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${p => p.theme.color.main};
  border-bottom: 2px solid ${p => p.theme.color.main};

  ul.navmenu {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  li.navitem {
    display: inline-block;
    padding: 12px 16px;
    margin: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    height: 100%;

    &:hover {
      color: ${p => p.theme.color.main};
    }
  }
`;

export default () => (
  <Header>
    <img className="brand" src={logo} />
    <NavMenu>
      <ul className="navmenu">
        <li className="navitem">
          <NavLink to="/">Blog</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navitem">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenu>
  </Header>
);
