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
    margin-top: -140px;
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
    margin: 10px 0;
    padding: 10px 15px;
    color: #f9f9f9;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 2px;
    border: 1px solid rgb(59 212 255);
    text-decoration: none;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img.helmetbutton {
    width: 17px;
    margin-left: 10px;
  }

`
