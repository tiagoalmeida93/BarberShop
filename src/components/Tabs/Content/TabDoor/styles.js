import styled from "styled-components";

export const Container = styled.div`
  background: var(--main-deep-dark);

  .container {
    margin: 0 10%;
  }

  img {
    width: 31.875rem;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
  }
`;
