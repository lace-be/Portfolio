import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--white);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: min(100%, 320px);
      height: min(100%, 320px);
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid #fff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      @media (min-width: 1200px) {
        width: 400px;
        height: 400px;
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`;
