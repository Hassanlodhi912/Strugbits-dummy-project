import styled from "styled-components";

export const Button = styled.button`
font-size: 17px;
  width: 161px;
height: 42px;
  text-decoration: none;
  max-width: auto;
   background-color: white; 
   color: ${({ theme }) => theme.colors.black};
   font-weight: bold;
   text-align: center;
   background: #FFFFFF 0% 0% no-repeat padding-box;
  /* padding: 1.4rem 2.4rem; */
  border: none;
  border-radius: 21px;
  /* text-align: center; */
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
  }
`;