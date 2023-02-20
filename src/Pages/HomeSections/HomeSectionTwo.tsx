import styled from "styled-components";
import Doodle from "../../Assets/Svg/Doodle.svg";
import Chess from "../../Assets/Svg/Chess.svg";

export default function HomeSectionTwo() {
  return (
    <Container>
      <div className="content-one-container">
        <div className="content-one-one">
          Africa’s <span>leading</span> visa consultants
        </div>
        <br />
        <div className="content-one-two">
          VISAPROF is a pioneer in Nigeria’s online travel industry. The
          organization started in 2020 on the basis of an idea conceived by its
          promoters. VISAPROF is trusted by over 200 clients. We assist
          applicants in navigating the visa process to any country in which they
          choose to stay or visit.
        </div>
      </div>
      <div className="image-container">
        <img src={Chess} alt="logo" className="chess" />
        <img src={Doodle} alt="logo" className="doodle" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .content-one-container {
    max-width: 400px;
  }

  .content-one-one {
    font-weight: 800;
    font-size: 25px;
  }

  .content-one-two {
    font-size: 15px;
  }

  span {
    color: var(--color-primary);
  }

  .image-container {
    position:relative;
  }

  .chess {
    z-index: 3;
  }

  .doodle {
    position: absolute;
    margin-left: -300px;
    z-index: -1;
    margin-top: 60px;
  }
`;
