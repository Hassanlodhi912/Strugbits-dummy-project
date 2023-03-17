import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const SearchError = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h3 style={{ color: "black" }}>UH No!Your search did not match any documents.</h3>
          <p>
            Suggestions:
            Make sure that all words are spelled correctly.
            Try different keywords.
            Try more general keywords.
            Try fewer keywords
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .container {
    /* padding: 9rem 0; */
    padding-bottom: 9rem;

    text-align: center;

  } 


    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  
`;

export default SearchError;