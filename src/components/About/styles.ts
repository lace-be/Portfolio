import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .about-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .about-right {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }

    .work-experience {
      margin-top: 2rem;

      h3 {
        color: var(--green);
      }

      h4 {
        margin-top: 1.6rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.5;
      }
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
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
`;
