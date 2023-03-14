import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <span className="headName">LOGO</span>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 84px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export default Header;
