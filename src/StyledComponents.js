import styled from "@emotion/styled";

export const LogoImage = styled.figure`
  width: 60px;

  img {
    width: 100%;
  }
`

export const WrapperHome = styled.div`
  min-height: calc(100vh - 84px);
`;

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
`;

export const AboutWrapper = styled.div`
  min-height: calc(100vh - 84px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 80px;


  figure {
    width: 80vh;
  }

  img {
    width: 100%;
  }

  .content {
    width: 600px; 
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
`;

export const FooterWrapper = styled.footer`
  background-color: #111;
  color: #f9f9f9;
  position: relative;

  figure.banner1 {
    width: 130px;
    position: absolute;
    left: calc(10% - 65px);
  }

  figure.banner2 {
    width: 130px;
    position: absolute;
    right: calc(10% - 65px);
  }

  img {
    width: 100%;
  };

  span {
    text-transform: uppercase;
    font-style: italic;
    letter-spacing: 2px;
    font-size: 14px;
  }

  .container {
    min-height: 288px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    font-size: 18px;
    margin-top: 7px;
  }

  .social {
    font-size: 60px;
    padding-top: 30px;

    a {
      margin: 15px;
    }

  }
`;

export const ChampionsInfoWrapper = styled.div`
  /* border: 1px solid red; */
  padding: 50px;

  span, h2 {
    text-align: center;
    text-transform: uppercase;
    font-style: italic;
  }

  span {
    display: block;
    font-size: 22px;
  }

  h2 {
    font-size: 65px;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

export const StyledSelectBar = styled.select`
  padding: 15px 25px;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  border-radius: 0;
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: block;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2px;
`;