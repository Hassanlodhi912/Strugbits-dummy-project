import styled from "styled-components";
import phone from "../src/images/phone.png"
import Group31 from "../src/images/Group31.png"
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { Button } from "../src/styles/Button";
import { useFormik } from "formik";
import Group30 from "./images/Group30.png"
import { contactFormSchema } from "./schemas/Index";

import Swal from 'sweetalert2'


const initialValues = {
  name: "",
  last: "",
  email: "",
  phone: "",
  subject: "",
  message : ""
}

const Contact = () => {
const Swal = require('sweetalert2')

  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik
  ({
     initialValues: initialValues,
     validationSchema:contactFormSchema,
     onSubmit: (values,action) => {
    console.log(values);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    action.resetForm();
    }
  }
  )
  console.log(errors,"error");

  return (
    <Wrapper>
      <div className="contact-div">
        <h1 className="common-heading">Contact Us</h1>
      </div>
      <div className="div-help-you-text" >
        <span className="h2-text" >I would Love to Help You</span>
        <h6>Please feel free to get in touch using the form below. We’d love to hear your thoughts & <br className="line" /> answer any questions you may have!</h6>
      </div>
      <div >
        <div className="third-div">
          <div className="third-div-main">
            <div className="phone-div-contact">
              <img src={Group30} alt="phone" className="phone-img-contact" />
              <div className="phone-div-div" >
                <h5 className="phone-div-contact-text">Phone Number</h5>
                <h5 className="phone-div-contact-text-2">123-456-7890</h5>
              </div>
            </div>
            <div className="phone-div-contact" >
              <img src={Group31} alt="" className="phone-img-contact" />
              <div className="phone-div-div" >
                <h5 className="phone-div-contact-text-2">Email Address</h5>
                <h5 className="phone-div-contact-text" >info@yourcompany.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-div">
        <span className="h2-text">Have any Question?</span>
        <div className="container">
          <div className="contact-form" >
            <form onSubmit={handleSubmit}
              className="contact-inputs" >
              <div className="flex-div">
                <label className="label">
                  <h6 className="label-css">
                    First Name
                  </h6>

                  <input class="search__input-contact"
                    type="name"
                    placeholder="Enter Your First Name"
                    name="name"
                    id="name"
                    autoComplete="off"
                    // label="FirstName"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                  />
               { errors.name && touched.name ?(  <p className="form-error">{errors.name}</p>):null}
                </label>

                <label className="label">
                  <h6 className="label-css">
                    Last Name
                  </h6>
                  <input className="search__input-contact"
                    type="last"
                    last="last"
                    placeholder="Enter Your Last Name"
                    autoComplete="off"
                    id="last"
                    value={values.last}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
              
               { errors.last && touched.last ?(  <p className="form-error">{errors.last}</p>):null}
               </label>

              </div>
              <div className="flex-div">
                <label className="label">
                  <h6 className="label-css">
                    Email*
                  </h6>

                  <input className="search__input-contact"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
               { errors.email && touched.email ? (<p className="form-error">{errors.email}</p>):null}
               </label>

                <label className="label">
                  <h6 className="label-css">
                    Phone no*
                  </h6>

                  <input
                    className="search__input-contact"
                    type="tel"
                    phone="phone"
                    name="phone"
                    placeholder="Enter Your Phone"
                    autoComplete="off"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
               { errors.phone && touched.phone ?(  <p className="form-error">{errors.phone}</p>):null}
               </label>
            
              </div>
              <div className="iiput" >
                <label className="label"
                >
                  <h6 className="label-css">
                    Subject*
                  </h6>

                  <input 
                    className="search__input-contact"
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    autoComplete="off"
                    
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

               { errors.subject && touched.subject ?(  <p className="form-error">{errors.subject}</p>):null}
               </label>
              
              </div>
              <div >
                <label className="label"
                >
                  <h6 className="label-css">
                    Message*
                  </h6>

                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    autoComplete="off"
                    placeholder="Enter you message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}></textarea>
               { errors.message && touched.message ?(  <p className="form-error">{errors.message}</p>):null}
               </label>

                   
              </div>
              <Button type="submit" className="btn-contact-submit"  >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
const Wrapper = styled.section`

text-align: center;


.contact-div {

  background-color: ${({ theme }) => theme.colors.black};
  height: 297px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

}
.h2-text{
font-family: "Axiforma-bold";
color : ${({theme})=>theme.colors.blackest};
font-size: 30px;
}

.div-help-you-text{

    height:300px;
    display: flex;
    flex-direction: column;
    justify-content:center; 
    gap: 1rem;
    max-height:500px;

}

.third-div{
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ellipse};
  min-height: 120px;
  padding: 20px 0;

  }
  .third-div-main{

    display: flex;
    justify-content: space-around;
    max-width: 700px;
    flex-wrap: wrap;
    gap: 1rem;
    text-align: left;

  }

  .phone-div-contact{
    display: flex;
    gap: 2rem;
    max-width: 50%;
    min-width: 300px;
  }
  .phone-div-div{
    flex-wrap: wrap;
  }
  .phone-div-contact-text{
    color: ${({ theme }) => theme.colors.hr};
    font-weight: bold;
  }
  .phone-div-contact-text-2{
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.hr};
  }
  .phone-img-contact{
    height: 71px;
    width: 71px;
  }
.contact-form-div{
  margin-top:50px;
  margin-bottom: 100px;
}
  .contact-heading{
    font-family: "Axiforma-Bold";
    font-size: 30px;
  }
  .flex-div{
     display: flex;
    justify-content: space-between ;
    flex-wrap: wrap;
  }
  .search__input-contact{

    width : 315.09px;
    height: 46px;
    background: white 0% 0% no-repeat padding-box;
    border: 1px solid #000000;
    border-radius: 23px;
    padding-left:22px ;
    margin: 0%;
   border: 1px solid black;
   font-family: "Axiforma-Light";

  }
textarea{

  border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 19px;
    padding: 1.6rem 2.4rem;
    font-family: "Axiforma-Light";

}

.label{
  display: flex;
  flex-direction: column;
  text-align: left;
}
.btn-contact-submit{
  width: 100px;
  width:inherit;
  background-color: ${({ theme }) => theme.colors.ellipse};
  color: ${({ theme }) => theme.colors.hr};
}
.iiput{
  /* width: 1000px; */
  max-width: auto;
  input{
    width: 100% !important;
  }
}
.PhoneNum{
  color: white;
  font-size:20px;
}
.lorem{
  width: 900px;
    margin: 0 auto;
    max-width: 80%;
    min-width: 280px;
    font-family:sans-serif;
    text-align: center;

}
.form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }

  
.container {
  margin-top: 6rem;
  max-width: 700px;

  .contact-form {
    margin: auto;
    gap:2rem;
    .contact-inputs {
    

      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .third-div-main{
      background-color: yellow;
    }
   
  }
}
`;
