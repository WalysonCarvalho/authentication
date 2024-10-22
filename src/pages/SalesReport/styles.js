import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 2rem;

  > nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    > header {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 30rem; /* Largura máxima */
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
      text-transform: uppercase;
      padding: 1rem;
      border-radius: 7px;
      margin-bottom: 1rem;
    }

    > button {
      margin-top: 1rem;
      width: 10rem;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    .list {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      text-transform: uppercase;
      padding: 2rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      text-transform: uppercase;
      padding: 2rem;
      border: 1px dashed #5a595e;
      border-radius: 2rem;

      .form-cadastro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .input-group {
          display: flex;
          gap: 1rem;
          @media (max-width: 768px) {
            flex-direction: column;
          }

          input {
            padding: 1rem;
            border-radius: 1rem;
            border: 1px solid #5a595e;
            width: 300px;
          }
        }

        > button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid #5a595e;
          width: 15rem;
        }
      }

      .header-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        text-transform: uppercase;
        padding: 2rem;
        border-bottom: 1px solid #5a595e;
      }

      .header-item {
        width: 33%;
        text-align: center;
        font-weight: bold;
      }

      .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-around;
        align-items: center;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid #5a595e;
          width: 3rem;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
          font-size: 2rem;
        }
      }

      .content-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        text-transform: uppercase;
        padding: 2rem;
        border-bottom: 1px solid #5a595e;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 1rem;
        }
      }

      .content-item {
        width: 33%;
        display: flex;
        flex-wrap: nowrap;

        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }
      }
    }
  }
`;
