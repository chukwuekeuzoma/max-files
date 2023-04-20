import styled from "styled-components";
import Nwangi from "../../Assets/Images/Nwangi.jpg";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForwardArrow from "../../Assets/Svg/ForwardArrow.svg";
import LeftRight from "../../Assets/Svg/LeftRightArrow.svg";
import ArrowDown from "../../Assets/Svg/Arrowdown.svg";

export default function HomeSectionOne() {
  const handleNextClick = () => {};

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow onClick={handleNextClick} />,
    className: "my-slider",
  };

  function CustomNextArrow(props: CustomArrowProps & { onClick: () => void }) {
    const { onClick } = props;
    return (
      <NextButton onClick={onClick}>
        <img src={ForwardArrow} alt="logo" />
      </NextButton>
    );
  }

  function CustomPrevArrow() {
    return <div style={{ display: "none" }}></div>;
  }

  return (
    <>
      <HomeSectionContainer>
        <br />
        <br />
        <p>
          PROMPT AND EASY STEPS FOR <br /> VISA PROCESSING
        </p>
        <SlideContainer>
          <div className="slider-inner-container">
            <Slider {...settings}>
              <SliderItems>
                <div className="item-one">Travelling from?</div>
                <div className="item-two-container">
                  <div>Lagos, Nigeria</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
                <div></div>
                <img src={LeftRight} alt="logo" className="leftright" />
              </SliderItems>
              <SliderItems>
                <div className="item-one">Travelling to?</div>
                <div className="item-two-container">
                  <div>Nairobi, Kenya</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
              </SliderItems>
              <SliderItems>
                <div className="item-one">Departure date</div>
                <div className="item-two-container">
                  <div>27th Jul 2022</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
                <div>Wednesday</div>
              </SliderItems>
              <SliderItems>
                <div className="item-one">Return date</div>
                <div className="item-two-container">
                  <div>07th Aug 2022</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
                <div>Thursday</div>
              </SliderItems>
              <SliderItems>
                <div className="item-one">Travellers/ Class</div>
                <div className="item-two-container">
                  <div>1 / Economy</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
                <div>traveller</div>
              </SliderItems>
              <SliderItems>
                <div className="item-one">Visa type</div>
                <div className="item-two-container">
                  <div>Tourist visa</div>
                  <div>
                    <img src={ArrowDown} alt="logo" />
                  </div>
                </div>
              </SliderItems>
            </Slider>
          </div>
        </SlideContainer>
      </HomeSectionContainer>
      <TrustedClents>
        <div>
          200
          <span>clients who have trusted us</span>
        </div>
        <div className="border">
          98%
          <span>Successful visa process rate</span>
        </div>
        <div>
          60 hrs
          <span>Application approval time</span>
        </div>
      </TrustedClents>
      <br/>
      <br/>
      <br/>
    </>
  );
}

const HomeSectionContainer = styled.div`
  margin-top: 65px;
  background-image: linear-gradient(var(--color-gray-10), var(--color-gray-10)),
    url(${Nwangi});
  background-size: cover;
  background-position: center;
  height: 500px;
  color: var(--text-light-100);

  p {
    font-weight: 800;
    font-size: 32px;
    margin-left: 30px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  margin: auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.32) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  box-shadow: 0px 4px 24px rgba(212, 175, 156, 0.25);
  backdrop-filter: blur(22.5px);
  border-radius: 30px;
  display: flex;
  height: 255px;
  width: 95%;
  justify-content: center;
  align-items: center;

  .slider-inner-container {
    width: 97%;
  }
`;

const SliderItems = styled.div`
  position: relative;
  background-color: var(--text-light-100);
  height: 150px;
  width: 100px;
  border-radius: 15px;
  border: 1px solid var(--text-light-200);
  color: var(--text-light-200);
  padding: 5px;

  .item-two-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 90px;
  }

  .leftright {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-left: -25px;
    margin-top: 55px;
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--dark-200);
  color: black;
  padding: 10px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  text-align: center;
`;

const TrustedClents = styled.div`
  background: var(--color-primary);
  margin: auto;
  width: 50%;
  height: 113px;
  border-radius: 20px;
  margin-top: -30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  div {
    text-align: center;
    padding: 10px;
    color: var(--text-light-100);
    font-weight: 600;
    font-size: 20px;

    span {
      display: block;
      margin-top: 20px;
      font-weight: 400;
      font-size: 13px;
    }
  }

  .border {
    border-left: 1px solid rgba(189, 189, 189, 0.7);
    border-right: 1px solid rgba(189, 189, 189, 0.7);
  }
`;
