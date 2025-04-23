import styled from "styled-components";

export const Container = styled.section`
  margin-top: 16rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .about-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .about-right {
    .work-experience {
      margin-top: 7rem;

      h3 {
        color: var(--white);
        text-align: left;
        margin-left: 1rem;
      }

      h4 {
        margin-top: 1.6rem;
        text-align: left;
        margin-left: 1rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: left;
        margin-left: 1rem;
      }
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--white);
  }

  h3 {
    color: var(--white);
    text-align: left;
    margin-left: 1rem;
  }

  h4 {
    margin-top: 1.6rem;
    text-align: left;
    margin-left: 1rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: left;
    margin-left: 1rem;
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;

    .hability {
      width: 5rem;
      height: 5rem;
      background: var(--shape);
      border-radius: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;

      img {
        width: 3rem;
        transition: 0.5s;
      }

      &:hover {
        transform: translateY(-0.5rem);
      }
    }
  }

  @media only screen and (max-width: 960px) {
    display: block;
    text-align: center;

    .about-right {
      img {
        width: 100%;
      }

      .work-experience {
        text-align: left;
      }
    }

    .about-left,
    .about-right {
      margin-bottom: 4rem;
    }
  }
  .download-button {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #23ce6b;
    border: 2px solid #23ce6b;
    border-radius: 100px;
    background: transparent;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-left: 1.2rem;

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: white;
    }
  }
`;
