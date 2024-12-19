import styled from "styled-components";

export const Section = styled.div`
  background-color: blueviolet;

  .navBar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    gap: 3rem;
    padding: 0.7rem;
  }
  img {
    height: 4rem;
    border-radius: 100%;
  }
  .texto {
    display: flex;
    font-size: 1rem;
    gap: 1.5rem;
  }
`;
