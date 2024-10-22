import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:2rem;

  

  > main {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  }
`;
