import styled from "styled-components";
import Facebook from "../Assets/Svg/Facebook.svg";
import Instagram from "../Assets/Svg/Instagram.svg";
import Linkedin from "../Assets/Svg/Linkedin.svg";
import Twitter from "../Assets/Svg/Twitter.svg";
import Whatsapp from "../Assets/Svg/Whatsapp.svg";

export default function Footer() {
  return (
    <>
      <FooterLine />
      <FooterContainer>
        <div>
          <img src={Facebook} alt="logo" />
          <img src={Instagram} alt="logo" />
          <img src={Linkedin} alt="logo" />
          <img src={Twitter} alt="logo" />
          <img src={Whatsapp} alt="logo" />
        </div>
        <div className="footer-titles-container">
          <h2 className="footer-titles">Company</h2>
          <div>Home</div>
          <div>About Us</div>
        </div>
        <div className="footer-titles-container">
          <h2 className="footer-titles">Legal</h2>
          <div>Terms of service</div>
          <div>Privacy policy</div>
        </div>
        <div className="footer-titles-container">
          <h2 className="footer-titles">Community</h2>
          <div>Blog</div>
          <div>FAQs</div>
        </div>
        <div className="footer-titles-container">
          <h2 className="footer-titles">Contact</h2>
          <div>info@visaprof.com</div>
          <div>07017401336</div>
        </div>
      </FooterContainer>
      <FooterBottomContainer>
        <div>2023 VISAPROF Visa processing firm. All rights reserved</div>
      </FooterBottomContainer>
    </>
  );
}

const FooterLine = styled.div`
  border: 1px solid rgba(189, 189, 189, 0.4);
  margin: auto;
  width: 90%;
`;

const FooterContainer = styled.footer`
   display:flex;
   justify-content:space-around;
   align-items:center;
  
 

   img{
    margin-left:5px;
    cursor: pointer;
   }

   .footer-titles-container{

    .footer-titles{
        font-weight: 600;
        font-size: 18px;   
    }

   div{
    margin-top:10px;
    margin-bottom:10px;
    cursor: pointer;
    color:var(--text-light-200);
    font-size: 13px; 
   }
`;

const FooterBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light-100);
  font-weight: 400;
  font-size: 13px;
  background: var(--dark-200);
  height: 70px;
`;
