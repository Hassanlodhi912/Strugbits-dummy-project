import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
          <h1 className="error-heading">404</h1>
          <h3 style={{color:"black"}}>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button className="btn-error-page">Go Back to Home</Button>
          </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;

  } 
  .btn-error-page{
    
    background-color: ${({theme})=>theme.colors.black};
    color: ${({theme})=>theme.colors.hr};
  }
  .error-heading{
    color: ${({theme})=>theme.colors.black};


  }
   
`;

export default ErrorPage;