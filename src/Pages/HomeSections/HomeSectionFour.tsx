import styled from "styled-components";
import Nigeria from "../../Assets/Images/Nigeria.jpg";
import Kenya from "../../Assets/Images/Kenya.jpg";
import Unitedarab from "../../Assets/Images/unitedarab.jpg";
import Eygpt from "../../Assets/Images/Eygpt.jpg";

export default function HomeSectionFour() {
  return (
    <Container>
      <div>
        Top <span>Destinations</span>{" "}
      </div>
      <div className="boxs-container">
        <div className="boxs">
          <img src={Kenya} alt="logo" />
          <div className="box-content">Kenya (E-visa)</div>
        </div>
        <div className="boxs">
          <img src={Unitedarab} alt="logo" />
          <div className="box-content-dark">United Arab Emirates</div>
        </div>
        <div className="boxs">
          <img src={Nigeria} alt="logo" />
          <div className="box-content">Nigeria (visa on arrival)</div>
        </div>
        <div className="boxs">
          <img src={Eygpt} alt="logo" />
          <div className="box-content-dark">Egypt</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  font-size: 25px;
  font-weight: 800;
  text-align: center;

  span {
    color: var(--color-primary);
  }

  .boxs-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
  }

  .boxs {
    width: 250px;
    height: 250px;
    border-radius: 20px;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .box-content {
    background: var(--color-primary);
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--text-light-100);
    padding-top: 10px;
  }

  .box-content-dark {
    background: var(--dark-200);
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--text-light-100);
    padding-top: 10px;
  }
`;
