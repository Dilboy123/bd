import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import MemberRegisterTabs from "./MemberRegisterTabs";

function MemberRegister() {
 
  return (
    <div>
      <Sidebar />
      <Wrapper>
        <h2>
          <u>Member Registration</u>
        </h2>

        {/* <div className="grid">
          <div className="right">
            <div className="col">Main Branch</div>
          </div>
        </div> */}
        <MemberRegisterTabs />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  text-align: center;

  /* .right {
    margin-left: 26rem;
  } */
  .grid {
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(6, 1fr);
    }
    .col {
      background-color: var(--clr-grey-9);
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 20px;
      box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.031),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.044),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.055),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.066),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.079),
        100px 100px 80px rgba(0, 0, 0, 0.11);
      /* align-self:start; */
      /* if want to grid picture */
      /* &.img-block {
        align-self:start;
        padding:0;
        background-color:none;
      } */
    }
  }
`;

export default MemberRegister;
