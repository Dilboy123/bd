import React from "react";
import styled from "styled-components";
const ChartComponent = () => {
  return (
    <Wrapper>
      <h4><u>Report</u></h4>
      <p>Test Data = 10</p>
      <p>Test Data = 10</p>
      <p>Test Data = 10</p>
      <p>Test Data = 10</p>
      <p>Test Data = 10</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  padding-top: 1rem;
  justify-items: center;
  background-color: white;
  
`;

export default ChartComponent;
