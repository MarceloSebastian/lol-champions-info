import styled from "@emotion/styled";

export const LogoImage = styled.figure`
  width: 60px;

  img {
    width: 100%;
  }
`

export const WrapperHome = styled.div`
  min-height: calc(100vh - 84px);
  `

export const Hero = styled.div`
  min-height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  
  figure {
    width: 590px;
    margin-top: -50px;
  }

  img {
    width: 100%;
  }

  p {
    color: #f9f9f9;
    font-size: 17px;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 500;
    line-height: 29px;
  }

  a {
    margin: 25px 0 10px 0;
    padding: 10px 15px;
    color: #f9f9f9;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2px;
    border: 1px solid rgb(59 212 255);
    text-decoration: none;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img.helmetbutton {
    width: 17px;
    margin-left: 10px;
  }

`

export const AboutWrapper = styled.div`
  /* border: 1px solid red; */
  min-height: calc(100vh - 84px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  figure {
    width: 80vh;
    /* border: 1px solid blue; */
  }

  img {
    width: 100%;
  }

  .content {
    width: 600px; 
    /* border: 1px solid green; */
    text-align: center;
    padding: 0 40px;
    
    h2 {
      font-style: italic;
      text-transform: uppercase;
      font-size: 65px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    p {
      font-size: 17px;
      letter-spacing: 0.5px;
      line-height: 25px;
      margin-bottom: 40px;
    }

    a {
      padding: 10px 15px;
      color: #000;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 2px;
      border: 1px solid #000;
      text-decoration: none;
      text-transform: uppercase;
      background-color: rgba(0, 0, 0, 0.2);
    }

  }
`