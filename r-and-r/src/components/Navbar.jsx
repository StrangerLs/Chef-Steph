import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
// https://dev.to/codebucks/build-hamburger-menu-in-reactjs-using-styled-components-25ln
const MenuLabel = styled.label`
  background-color: ${(props) => (props.clicked ? "#b6edc8" : "#d6fde8")};
  transition: all 0.3s;
  position: absolute;
  top: 2rem;
  right: 3rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  @media (max-width: 480px) {
    top: 7rem;
    right: 8rem;
    height: 5rem;
    width: 5rem;
    margin-right: 15px;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  @media (max-width: 480px) {
      margin-top: 2.5rem;
      
  }

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  
`;

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <div id="head">
        <h1 id="RR">ROOTS & ROSEMARY</h1>
      </div>

      <div className={click ? "visible" : "hidden"}>
        <Link id="l1" to="/">Home</Link>
        &nbsp;
        <Link id="l2" to="/recipes">All Recipes</Link>
        &nbsp;
        <Link id="l3" to="/foods/bigPlate">Big Plates</Link>
        &nbsp;
        <Link id="l4" to="/foods/smallPlates">Small Plates</Link>
        &nbsp;
        <Link id="l5" to="/foods/beverages">Beverages</Link>
        &nbsp;
        <Link id="l6" to="/form">New Recipe</Link>
      </div>
    </div>
  );
}
