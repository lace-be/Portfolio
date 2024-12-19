import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem; /* Reduced the top margin for a better look */
  padding: 0 2rem; /* Added padding for better spacing */

  .subtitle {
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 2rem;
  }

  .left {
    margin-right: 60%;
  }

  .right {
    margin-left: 60%;
    text-align: right;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: flex;
    flex-direction: column; /* Stack the sections vertically */
    gap: 4rem; /* Space between each section */
  }

  .project {
    display: flex;
    justify-content: space-between; /* Aligns text and image horizontally */
    gap: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start; /* Align content to the left */
    width: 100%;
  }

  .project-img {
    height: auto;
    border-radius: 8px; /* Rounded corners for images */
  }

  .project:nth-child(odd) .content {
    align-items: flex-start; /* Text and image left-aligned for odd sections */
  }

  .project:nth-child(even) .content {
    align-items: flex-end; /* Text and image right-aligned for even sections */
  }

  .project h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .projects {
      gap: 3rem; /* Adjust space between sections on medium screens */
    }

    .project {
      flex-direction: column; /* Stack text and image vertically on medium screens */
      justify-content: center; /* Center them for mobile layout */
    }

    .project-img {
      width: 100%; /* Full width images on smaller screens */
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 2.5rem; /* Adjust heading size for smaller screens */
    }
  }
`;
