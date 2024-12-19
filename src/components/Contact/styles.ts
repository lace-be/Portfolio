import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    h2 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    p {
      color: var(--white);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;

    .contact-card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      max-width: 30rem;
      gap: 1rem;
      background-color: var(--white);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s, color 0.25s;

      img {
        width: 4rem;
        margin-bottom: 1rem;
      }

      a {
        color: var(--white);
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        transition: color 0.25s;
      }

      &:hover {
        background-color: var(--white);
        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;

      .contact-card {
        width: 100%;
      }
    }
  }
`;
