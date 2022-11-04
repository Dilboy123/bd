import React, { useContext } from "react";
import logo from "../images/logo.png";
import { FaTimes } from "react-icons/fa";
import { social, data } from "../utils/constants";
import { AppContext } from "../context/sidebar";
import styled from "styled-components";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {data.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li id={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 60px;
    width: 60px;
  }

  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }
  .links a:hover svg {
    color: var(--clr-grey-4);
  }
  .sidebar {
    position: fixed;
    min-width: -20px;
    top: 0;
    left: 0;
    /* + */
    height: 100%;
    background: var(--clr-white);
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(--clr-red-dark);
    transition: var(--transition);
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }
  @media screen and (min-width: 676px) {
    .sidebar {
      width: 400px;
    }
  }
`;

export default Sidebar;