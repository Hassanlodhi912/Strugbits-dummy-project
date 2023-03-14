import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import axios from "axios";
import Men from "../images/Men.png";
import { setSingleProduct } from "../store/action/Index";
import Info from './Info';
import MainScreen from './MainScreen';
const SingleP = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const fetchSingleProduct = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((err) => { console.log("Error", err) })
    console.log(response, "response")
    dispatch(setSingleProduct(response.data))

  }
  useEffect(() => { fetchSingleProduct() }, [])
  const singleProduct = useSelector((state) => state.ToggleReducer.singleProduct)
  const { name ,company} = singleProduct;
  console.log(singleProduct)
  return (

    <>
      <MainScreen />
      <Wrapper className='grid'>
        <div className="detail-"  >
          <img className="card-detail-img" src={Men} alt="" />
          <div className='card-detail-text'>
            <h1 className='card-detail-name'>{name}</h1>
            <h3>Electrical Engineer</h3>
          </div>
        </div>
      </Wrapper>
      <Info name={name} />
    </>

  )
}
export default SingleP;
const Wrapper = styled.section`
margin-top: 10rem;

.detail-{

display: flex;
flex-direction: row;
gap: 13rem;
justify-content: center;
align-items: center;
margin-bottom: 5rem;
margin-top: 5rem;
flex-wrap: wrap;

}

.card-detail-name{

color: ${({ theme }) => theme.colors.black};

}

.card-detail-img{
  width: 323px;
  height: 341.31px;
}


.card-detail-text{
  line-height: 45px;

}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .detail-{
    text-align: center;
  }

}

`