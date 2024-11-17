import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="logo">
        <img src={avatar} alt="User Avatar" />
        <h2>USER</h2>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.icon}
            <span>{item.title}</span>
            <div className="line"></div>
          </li>
        ))}
        <li className="sign-out" onClick={signout}>
          {signout} Sign Out
        </li>
      </ul>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  background-color:	#CCCCFF;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    h2 {
      margin: 0;
      color: #333;
    }
  }

  .menu-items {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      color: #333;
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        color: white;
        .line {
          opacity: 1;
        }
      }

      &.active {
        color: white;
        font-weight: bold;
        .line {
          opacity: 1;
        }
      }

      .line {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: white;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      svg {
        fill: #333;
        transition: fill 0.3s ease;
      }

      &:hover svg {
        fill: white;
      }
    }
  }

  .sign-out {
    cursor: pointer;
    color: red;
    transition: color 0.3s ease;

    &:hover {
      color: #c82333;
    }
  }
`;

export default Navigation;
