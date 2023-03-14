import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth,
  1rem = 10px;
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1{
  color: #FFFFFF;
  font-size: 55px;
  font-family: "Axiforma-SemiBold";
  opacity: 1;

}


h2{
     color: ${({ theme }) => theme.colors.heading};
     font-family:"Axiforma-SemiBold";
    font-size: 30.9px;
  }

h3 {
color: ${({ theme }) => theme.colors.black};
font-size: 30px;
font-family: "Axiforma-SemiBold";
}

h4{
font-family: "Axiforma-Regular";
color: ${({ theme }) => theme.colors.hr};
font-size: 20px;
font-weight: lighter;
}

h5{
font-family: "Axiforma-SemiBold";
font-size: 16px;
color: ${({ theme }) => theme.colors.black};
}
h6{

font-family: "Axiforma-Regular";
color : ${({theme})=>theme.colors.black};
font-size:16px;

}

p{
  font-family: "Axiforma-Medium";
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.headName{
  color: #FFFFFF;
  font-size: 32px;
  font-family: "Axiforma-SemiBold";
  opacity: 1;
  padding-left: 20px;
}

.container {
  max-width: 90rem;
  margin: 0 auto;
}

.grid {
  display: grid;


  /* gap: 9rem; */
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }


@media (max-width: ${({ theme }) => theme.media.tab}) {

    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }

    
.grid{

}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;
