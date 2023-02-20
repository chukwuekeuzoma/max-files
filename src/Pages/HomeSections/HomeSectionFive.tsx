import styled from "styled-components";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../../Assets/Svg/next.svg";
import Next1 from "../../Assets/Svg/next1.svg";
import Nigeria from "../../Assets/Images/Nigeria.jpg";
import Kenya from "../../Assets/Images/Kenya.jpg";
import Unitedarab from "../../Assets/Images/unitedarab.jpg";
import Eygpt from "../../Assets/Images/Eygpt.jpg";

export default function HomeSectionFive() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    className: "my-slider",
  };

  return (
    <Container>
      <div className="content-one">Popular destinations</div>
      <div className="content-two">Tourist visa only</div>
      <SliderContainer>
        <Slider {...settings}>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
          <SliderItems>
            <div className="boxs">
              <div className="box-content-up">United Arab Emirates</div>
              <img src={Kenya} alt="logo" />
              <div className="box-content">
                Processing time:
                <span className="color-span">2-3 working days</span>
                <span>₦30,000 per person</span>
              </div>
            </div>
          </SliderItems>
        </Slider>
      </SliderContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  text-align: center;

  .content-one {
    font-weight: 800;
    font-size: 25px;
  }

  .content-two {
    margin-top: 20px;
    margin-bottom:50px;
    height: 20px;
    background: rgba(255, 243, 209, 0.6);
    color: var(--text-light-200);
    padding:10px;
  }
`;

const SliderContainer = styled.div`
  margin: auto;
  height: 250px;
  width: 90%;
`;

const SliderItems = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 20px;
  position: relative;

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

  .box-content-up {
    background: #ffffff;
    height: 50px;
    width: 96%;
    position: absolute;
    top: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: start;
    font-weight: 600;
    font-size: 13px;
    padding: 5px;
    text-align: center;
  }

  .box-content {
    background: var(--color-primary);
    height: 50px;
    width: 96%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: start;
    font-weight: 600;
    font-size: 13px;
    color: var(--text-light-100);
    padding: 5px;
  }

  span {
    display: block;
  }

  .color-span {
    color: var(--dark-200);
  }
`;
