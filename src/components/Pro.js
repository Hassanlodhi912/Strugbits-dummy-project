import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import Men from "../images/Men.png";
import { Button } from "../styles/Button"

const Pro = (currElem) => {
    const { id, name, email, company } = currElem;
    return (

        <Wrapper >

            <div className="card">
                <div className="card-img">

                    <img src={Men} alt={name} />
                </div>
                <div className="card-data">
                    <div className="card-data-flex" >

                        <h3 >{name}</h3>
                        <p className='p-email'>{email}</p>
                        <p className='p-company'>{company.name}</p>
                        <p className='p-lorem'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atqunderit, ipsam tenetur fugit?</p>
                        <NavLink to={`/singleproduct/${id}`}>
                           <Button style={{ backgroundColor: "#fd5c64", color: "white" }}>
                                View Detail
                            </Button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
padding-bottom: 20px;

.card{
    display:flex;
    justify-content: center;
    gap: 2rem;
}

.card-data{
    display:flex;
    flex-direction: column;
    width: 514px;
    min-width: 270px;
}
.card-data-flex{
    height: 203px;
    margin: 0% ;
    padding: 0% ;
}
.card-data-flex :nth-child(1){
    margin: 0% !important;
    padding: 0% !important;
}

.p-email{
    color: ${({ theme }) => theme.colors.black};
}

.p-company{
    color: ${({ theme }) => theme.colors.company};
}

.p-lorem{
    padding-top: 10px;
    padding-bottom: 10px;
    color: #B0B0B0;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

   .card{
   flex-wrap: wrap;
   padding-bottom: 30px;
   }

.card-data-flex{
    text-align: center;
}

}
`
export default Pro;
