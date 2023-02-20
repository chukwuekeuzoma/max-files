import styled from "styled-components";
import CircleVecOne from "../../Assets/Svg/CircleVector1.svg";
import CircleVecTwo from "../../Assets/Svg/CircleVector2.svg";
import Stars from "../../Assets/Svg/Stars.svg";
import Uzoma from "../../Assets/Images/Uzoma.jpg";

export default function HomeSectionSix() {
  return (
    <Container>
      <ContainerInner>
        <img src={CircleVecOne} alt="logo" className="CircleVecOne" />
        <img src={CircleVecTwo} alt="logo" className="CircleVecTwo" />
        <div>
          <div className="content-img-container">
            <img src={Uzoma} alt="logo" className="content-img" />
          </div>
          <br />
          <span>Mr Leke</span>
          <span>
            I’m happy I chose to process my visa with you guys, not a single
            regret. Visa came right on time with no hassle.
          </span>
          <img src={Stars} alt="logo" className="stars" />
        </div>
        <div className="center-div">
          <div className="content-img-container">
            <img src={Uzoma} alt="logo" className="content-img" />
          </div>
          <br />
          <span>Mr Leke</span>
          <span>
            I’m happy I chose to process my visa with you guys, not a single
            regret. Visa came right on time with no hassle.
          </span>
          <img src={Stars} alt="logo" className="stars" />
        </div>
        <div>
          <div className="content-img-container">
            <img src={Uzoma} alt="logo" className="content-img" />
          </div>
          <br />
          <span>Mr Leke</span>
          <span>
            I’m happy I chose to process my visa with you guys, not a single
            regret. Visa came right on time with no hassle.
          </span>
          <img src={Stars} alt="logo" className="stars" />
        </div>
      </ContainerInner>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 400px;
  margin-top: 100px;
`;

const ContainerInner = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;

  .CircleVecOne {
    position: absolute;
    right: 0;
  }

  .CircleVecTwo {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  div {
    background: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 20px;
    height: 250px;
    width: 250px;
    position: relative;
    text-align: center;
    margin-left:10px;
    margin-right:10px;

    span {
      display: block;
      font-size: 13px;
      padding: 5px;
      margin-top: 20px;
    }

    .stars {
      margin-top: 20px;
    }
  }

  .center-div {
    background: #ffffff;
    box-shadow: 0px 16px 12px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 16px 12px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 16px 12px -6px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    height: 250px;
    width: 250px;
    text-align: center;
  }

  .content-img-container {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    border: 2px solid var(--dark-200);
    top: 0;
    margin-left: 95px;
    margin-top: -20px;
  }

  .content-img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
