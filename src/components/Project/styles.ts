import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  .body {
    padding-bottom: 40px;
  }
  .details-button {
    bottom: 15px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #23ce6b; /* Button color */
    color: #fff; /* Text color */
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    text-decoration: none;
    margin-top: 15px;
  }

  .details-button:hover {
    background-color: #1a9f50; /* Darker shade for hover effect */
  }

  .details-button:focus {
    outline: none; /* Remove the focus outline */
  }

  .details-button:active {
    background-color: #1a9f50; /* Change the background on click */
  }

  .titlehead {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      max-width: 100%;
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #ffff;
      position: relative; /* Enable absolute positioning for children */

      &:hover {
        transform: translateY(-5px);
        background-color: var(--blue);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue); /* Assuming you have a color variable for blue */
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5rem;
        }
      }

      h2 {
        margin-bottom: 2rem;
        color: var(--white); /* Added green color to match your design */
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        color: #fff; /* Ensure the text color is white for contrast */
        a {
          color: #ffff;
          border-bottom: 1px solid var(--white);
          transition: color 0.25s;
          &:hover {
            color: var(--white);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }

        img {
          width: 8rem; /* Smaller logo size */
          height: 8rem;
          position: absolute;
          bottom: 1rem;
          right: 1rem;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }

    .project footer img {
      width: 2.5rem; /* Adjust logo size for smaller screens */
      height: 2.5rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }

    .project footer img {
      width: 2.2rem; /* Adjust logo size for even smaller screens */
      height: 2.2rem;
    }
  }
`;
