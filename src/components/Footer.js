import React from "react";
import styled from "styled-components";
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkdin from "../images/linkdin.png";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <>
      <Wrapper>

        <footer >
          <div className="footer-social">
            <span className="footer-logo" >Logo</span>
            <div className="footer-social--icons">
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={twitter} alt="twitter" />
              </div>
              <div>
                <a
                  href="https://www.youtube.com"
                  target="blank">
                  <img src={linkdin} alt="linkdin" />
                </a>
              </div>
            </div>
          </div>
          <div className="gri">
            <div className="footer-social-1" >
              <div className="tick">
                <GoTriangleRight color="white" size={15} />
                <h4 >About Us</h4>
              </div>
              <div className="tick">
                <GoTriangleRight color="white" size={15} />
                <h4 >Blog</h4>
              </div>
              <div className="tick">
                <GoTriangleRight color="white" size={15} />
                <h4 > Contact us</h4>
              </div>
            </div>
            <div className="footer-social">
              <div className="tick">
                <GoTriangleRight color="white" size={15} />
                <h4 >Members</h4>
              </div>
              <div className="tick">
                <GoTriangleRight color="white" size={15} />
                <h4 >More</h4>
              </div>
            </div>
          </div>
          <div className="footer-subscribe">
              <input className="search__input-footer" type="email" name="email" placeholder="Email Address" />
              <Button className='btn-search-footer'> Sign Up</Button>

          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
.footer-logo{
  font-family: "Axiforma-SemiBold";
  font-size:43px;
  color: white;
  width: 111px;
}
.footer-social{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer-social-1{
  padding-top:36px;
  
}
.search__input-footer{

  color:#B0B0B0;
  font-family: Axiforma-Regular;
  font-size: 17px;
  width : 215px;
  height: 51.5px;
  background: white 0% 0% no-repeat padding-box;
  border: 1px solid #000000; 
  border-radius: 25px 0px 0px 25px;
  padding: 0px 0px 0px 50px ;
  margin: 0%;
  border: 1px solid black;

}
.btn-search-footer{
  font-family:Axiforma-Bold;
  font-size: 17px;
  width: 80px;
  height: 49.5px;
  color: ${({ theme }) => theme.colors.hr};
  background-color: ${({ theme }) => theme.colors.company};
  border-radius: 0px 25px 25px 0px;
  margin: 0%;
  padding: 0%;
}


.gri{
display: flex;
flex-direction: row;
gap:2rem;
flex-wrap: wrap;
}

.tick{
  color: #FFFFFF;
  display:flex;
  flex-wrap: wrap;
  margin: 0%;
  padding: 0% !important;
align-items: center;
}

.footer-subscribe{
  display: flex;
    /* justify-content: center; */
    align-items: center

}

.f{
  display: flex;
  flex-direction: column;
}

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);


    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }


  footer {
    height: 139px;
    max-height: 150px;
    display: flex;
    gap: 6rem;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    
    .footer-social--icons {
      display: flex;
      justify-content: space-around;

      div {
        /* border: 2px solid ${({ theme }) => theme.colors.white}; */

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }


  .footer-bottom--section {
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    footer{
      flex-wrap: wrap;

    }
    .footer-social {
      display: flex;
      justify-content: center;
    }

    /* .footer-bottom--section {
      padding-top: 4.8rem;
    } */

 /* .gri{
display: flex;
flex-direction: column;
gap:0rem;
}
  } */
  }
  `


export default Footer;