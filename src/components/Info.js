import React from 'react'
import styled from 'styled-components'
import twitterGreen from "../images/twitterGreen.png";
import email from "../images/email.png";
import linkdinGreen from "../images/linkdinGreen.png";
import MainBlack0 from "../images/MainBlack0.png";
import MainRed from "../images/MainRed.png";
import MainSmall from "../images/MainSmall.png";

const Info = ({ name }) => {
    return (
        <Wrapper >
            <div className='grid'>
                <div className='position'>
                    <div className='position-absolute'>
                        <img src={MainBlack0} className="img-element" alt="" />
                        <img src={MainRed} className="img-element" alt="" />
                        <img src={MainSmall} className="img-element" alt="" />


                    </div>

                    <h1 className='info-heading'>Info</h1>
                    <div className='info-about-heading' >
                        <h2 classname='about-info'> About</h2>
                        <h2 className='company-heading-info'>{name} </h2>
                    </div>
                    <p className='info-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='social-icon-info-page'>
                        <div className="flex">
                            <img src={twitterGreen} alt="twitter" className='info-icon' />
                            <h5>@Loremipsum</h5>
                        </div>
                        <div className="flex">
                            <img src={linkdinGreen} alt="linkdinGreen" className='info-icon' />
                            <h5>@Loremipsum</h5>
                        </div>
                        <div className="flex">
                            <img src={email} alt="email" className='info-icon' />
                            <h5>@Loremipsum</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Info;

const Wrapper = styled.section`

padding-bottom: 100px;

   .grid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 40px;
    border: solid 3px;
    color: ${({ theme }) => theme.colors.light};



   }

   .grid > *{
    z-index: 1;

   }

   
.position-absolute{
    position: absolute;
    z-index: 1;


}

.position-absolute>*{
    position: absolute;


}
.position-absolute :nth-child(1){
    top:120px;
    right:140px;

}
.position-absolute :nth-child(2){
    top:125px;
    right: 20px;

}
.position-absolute :nth-child(3){
    top:80px;
    right: 80px;

}

.info-heading{
    color: ${({ theme }) => theme.colors.btn};
    text-align: center;
    font-weight: bolder;

   }

.info-about-heading{

    font-weight: bolder;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

}
.company-heading-info{

    color: ${({ theme }) => theme.colors.company};

}
.info-lorem{
    text-align: center;
    width: 901px;
    padding-bottom: 5px;
    color:${({ theme }) => theme.colors.blackest}

}
.info-icon{

    height: 32px;
    width: 32px;

    }

.flex{

    display: flex;
    gap:2rem;

}

.social-icon-info-page{

    display: flex;
    justify-content: center;
    flex-direction:row;
    text-align: center;
    gap: 5rem;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

    .info-lorem{
    width: auto;

    }
}
    @media (max-width: ${({ theme }) => theme.media.tab}) {
    .img-element{
      display: none;
    }
}
`


