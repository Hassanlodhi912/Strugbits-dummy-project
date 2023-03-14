import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import Ellipse from "../images/Ellipse.png";
import Clip from "../images/Clip.png";
import main2 from "../images/main2.png";
import MainBlack from "../images/MainBlack.png";

const MainScreen = () => {
    return (
        <Wrapper
        >
            <div className="Main" >
                <img src={Clip} alt="Main3"/>
                <img src={Ellipse} alt="Main4"/>
                <img src={MainBlack} alt="Main1"/>
                <img src={main2} alt="Main2"/>

                <div className='MainText' >
                    <h1 className="heading">Take your Saas to Higher Ground</h1>
                    <p className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                    <Button classname="btn-Main" style={{ width: "217px", color: "#fd5c64", fontFamily: "Axiforma-ExtraBold", fontSize: "24px" }}
                    >Join the club</Button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.Main{
    max-width: 100%;
    min-width: 365px;
    height: 684px;
    flex: 1;
    position: relative;
    width: 684px;
    object-fit: cover;
}
.Main > * {
    position: absolute;
    z-index: 1;
    background-size: 100% 100%
}
.Main :nth-child(3){
    top: 319px;
    left: 509px;

}
.Main :nth-child(4){
    top: 181px;
    left: 617px;
}



.MainText{
    padding: 12rem 5rem 8rem 6.5rem;
    gap: 2rem;
}

.heading{
    width: 497px;
    color: white;
    text-align: left;
    line-height: 1.2;
    padding: 0%;
    margin: 0%;
}
.loremText{
    width: 433px;
    color: white;

}



@media (max-width: ${({ theme }) => theme.media.mobile}) {

    .heading{
        width: 80% !important;
        padding: 0;
        margin: 0 !important;
    }
    .loremText{
        width: 70% !important;
        padding: 0% !important;
        margin: 0% !important;
    }
}

.MainText{
    display :flex;
    flex-direction: column;

}


`
export default MainScreen
