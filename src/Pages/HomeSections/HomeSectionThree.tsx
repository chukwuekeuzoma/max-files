import styled from "styled-components";
import ConsultationIconOne from "../../Assets/Svg/ConsultationIconOne.svg";
import ConsultationIconTwo from "../../Assets/Svg/ConsultationIconTwo.svg";
import ConsultationIconThree from "../../Assets/Svg/ConsultationIconThree.svg";
import SupportIcon from "../../Assets/Svg/SupportIcon.svg";

export default function HomeSectionThree() {
  return (
    <Container>
      <div className="content-one">What we offer our clients</div>
      <div className="boxs-container">
        <div className="boxs">
          <img src={ConsultationIconOne} alt="logo" className="img-icon" />
          <div className="box-content-one">Visa Consultation</div>
          <div className="box-content-two">
            Our qualified and dependable visa consultants can assist you in
            obtaining a favorable result in your case.
          </div>
        </div>
        <div className="boxs">
          <img src={ConsultationIconTwo} alt="logo" className="img-icon" />
          <div className="box-content-one">Resources</div>
          <div className="box-content-two">
            We provide our clients with important information and resources and
            also the travel requrements needed.
          </div>
        </div>
        <div className="boxs">
          <img src={SupportIcon} alt="logo" className="img-icon" />
          <div className="box-content-one">Support</div>
          <div className="box-content-two">
            We also provide required document support to ease the application
            process.
          </div>
        </div>
        <div className="boxs">
          <img src={ConsultationIconThree} alt="logo" className="img-icon" />
          <div className="box-content-one">Free Assessment</div>
          <div className="box-content-two">
            We help those who want to know their eligibility status by assisting
            with free visa assessment.
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 40px;

  .content-one {
    font-size: 25px;
    font-weight: 800;
  }

  .boxs-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
  }

  .boxs {
    position: relative;
    box-shadow: 0px 4px 8px rgba(14, 31, 53, 0.12);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.8);
    height: 250px;
    width: 250px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .img-icon {
    position: absolute;
    top: 0;
    margin-top: -21px;
  }

  .box-content-one {
    font-weight: 700;
    font-size: 17px;
  }

  .box-content-two {
    font-size: 13px;
    margin-top: 20px;
  }
`;
