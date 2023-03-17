import React from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import styled from "styled-components";
import { setProducts } from '../store/action/Index';
import Pro from './Pro';
import { useState } from "react";
import { Button } from '../styles/Button';
import search from "../images/search.png";
import MainBlack0 from "../images/MainBlack0.png";
import MainRed from "../images/MainRed.png";
import MainSmall from "../images/MainSmall.png";
import CardLastblue from "../images/CardLastblue.png";
import CardLastBlack from "../images/CardLastBlack.png";
import SearchError from './SearchError';

const Cards = () => {
  const [initailData, setinitialData] = useState([]);
  const [initailDataLength, setinitailDataLength] = useState();
  const [fullSearch, setFullSearch] = useState()
  const [inputVal, setInputVal] = useState("")
  const [finalData, setFinalData] = useState([]);
  const [finalDataLength, setFinalDataLength] = useState();
  const [showmore, setShowMore] = useState(true);
  const featureProducts = useSelector((state) => state.ToggleReducer.Products);

  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    let copyArr = []
    for (let i = 0; i <= 3; i++) {
      copyArr.push(response.data[i])
    }

    setFinalData(response.data); //10
    setFinalDataLength(response.data.length)
    // console.log("finalData: ", response.data.length)
    // console.log("finalData: ")

    setinitialData(copyArr); //4
    setinitailDataLength(copyArr.length)

    setData(response.data);
    dispatch(setProducts(response.data));

    // setFullSearch(copyArr)

  }

  const [data, setData] = useState([]);
  const Searching = (searchItems) => {

    // setinitialData(featureProducts.filter((val) => {
    //   console.log("if")
    //   if (val === "") {
    //     return val;
    //   } else if (val.username.toLowerCase().includes(searchItems.toLowerCase()) || val.email.toLowerCase().includes(searchItems.toLowerCase()) || val.company.name.toLowerCase().includes(searchItems.toLowerCase())) {
    //     return val;
    //   }
    // })
    // )
    setFinalData(featureProducts.filter((val) => {
      if (val === "") {
        return val;
      } else if (val.username.toLowerCase().includes(searchItems.toLowerCase()) || val.email.toLowerCase().includes(searchItems.toLowerCase()) || val.company.name.toLowerCase().includes(searchItems.toLowerCase())) {
        return val;
      }
    })
    )
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  const render = () => {
    setShowMore(true)
    // console.log(showmore);
  }

  const renderSec = () => {
    setShowMore(false)
    // console.log(showmore);
  }

  // console.log(finalDataLength)
  // console.log(finalData.length)
  console.log("inputVal !=", inputVal != "", inputVal)

  return (

    <Wrapper >
      <div className="Top-level-card--page-div">
        <img className='img-element' src={MainBlack0} alt="MainBlack0" />
        <img className='img-element' src={MainRed} alt="MainRed" />
        <img className='img-element' src={MainSmall} alt="MainSmall" />
        <img className='img-element' src={CardLastblue} alt="CardLastblue" />
        <img className='img-element' src={CardLastBlack} alt="CardLastBlack" />
        <h2 className="common-heading">Search</h2>
        <div class="search__container">
          <input class="search__input"
            type="text"
            placeholder="Search by Name, Username, Zip Code, Address"
            onChange={(e) => {
              // console.log(e.target.value)

              setInputVal(e.target.value)
              Searching(e.target.value);
            }} />
          <Button className='btn-search'> <img src={search} alt="" /></Button>

        </div>

        {
          finalData[0] ?
            (
              showmore === false || inputVal != "" ?
                finalData.map((val) => {
                  return <Pro key={val.id}{...val} />
                })
                :
                initailData.map((val) => {
                  return <Pro key={val.id}{...val} />
                })
            )
            :
            <SearchError />
        }

        <div className="show-more-div" >
          {


          }
          {
            // finalData.length <= finalDataLength || initailData.length <= initailDataLength &&
            finalData.length === finalDataLength &&
            <>
              {
                showmore === false &&
                <h3 className='show-more' onClick={render} >Show less</h3>
              }
              {
                showmore === true &&
                <h3 className='show-more' onClick={renderSec}>Show more</h3>
              }
            </>
          }

        </div>
      </div>

    </Wrapper>
  )
}



const Wrapper = styled.section`


.Top-level-card--page-div{
  position: relative;
  min-height: 65vw;

}
.Top-level-card--page-div > *{
  position: relative;
  z-index: 1;
}

.Top-level-card--page-div :nth-child(1){
  top: 565px;
left: -29.337646484375px;

}

.Top-level-card--page-div :nth-child(2){
  top: 630px;
  left: -115px;
}
.Top-level-card--page-div :nth-child(3){
  top: 420px;
  left: -220px;
}
.Top-level-card--page-div :nth-child(4){
  top: 1085px;
  left: 780px;
}
.Top-level-card--page-div :nth-child(5){
  top: 1120px;
  left: 720px;
}

.search__container{
  align-content:center;
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  text-Align: center;

}
.search__input{
 width : 575px;
 height: 51.5px;
 background: white 0% 0% no-repeat padding-box;
 border: 1px solid #000000;
 border-radius: 25px 0px 0px 25px;
 padding: 2px 2px 0px 12px ;
 margin: 0%;
 border: 1px solid black;

}

input[type="text"]{
    max-width: 575px;
    background-color: ${({ theme }) => theme.colors.white};
    color: black;
    border-style: solid;
    font-size: 17.37px;
    font-family: Axiforma-Regular;
    cursor: pointer;
    opacity:27% ;
    padding-left: 30px;
    } 

.btn-search{
  width: 80px;
  height: 51.5px;
  background-color: #000000;
  border-radius: 0px 25px 25px 0px;
  margin: 0%;
  padding: 0%;
}

.common-heading{
  text-align: center;
  padding-bottom: 25px;
}
.show-more-div{
  padding-top: 30px;
  text-align: center;
  padding-bottom: 70px;
}
.show-more{
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};
  cursor: pointer;
}

.container {
    .icons {
        color: ${({ theme }) => theme.colors.white};
        transform: scale(1.5);
        background-color: black;
        
      }}

    .contact-form {
      max-width: 80rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 655px;

        input[type="search"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 12px solid ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.black};
            transform: scale(0.9);
          }
        }
      }
    }
 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {

    .search__input{
      width: 50% !important;
    }

  }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
    .img-element{
      display: none;
    }
    .Top-level-card--page-div{
      padding-top: 150px;
    }
  }

`
export default Cards
