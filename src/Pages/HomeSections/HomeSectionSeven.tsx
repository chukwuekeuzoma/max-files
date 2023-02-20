import styled from "styled-components";
import Vector from "../../Assets/Svg/Vector3.svg";
import UiInput from "../../Components/UiInput";
import UiButton from "../../Components/UiButton";

export default function HomeSectionSeven() {
  function handleChange() {}

  return (
    <>
      <Container>
        <div className="container-content">
          Get free assessment today
          <span>Feel free to enquire about any questions you have</span>
        </div>
      </Container>
      <InputContainer>
        <UiInput
          placeHolder="Full name*"
          value="Fullname"
          name="email"
          // error={errors.email}
          onChange={handleChange}
        />
        <br />
        <UiInput
          placeHolder="Email*"
          value="Email"
          name="email"
          // error={errors.email}
          onChange={handleChange}
        />
        <div className="button-contianer">
          <UiButton textCasing="capitalize">Send</UiButton>
        </div>
      </InputContainer>
    </>
  );
}

const Container = styled.div`
  //   background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Vector});
  height: 100%;
  margin-top: 100px;
  margin-bottom: 30px;

  .container-content {
    font-size: 25px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 30px;
  }

  span {
    display: block;
    color: var(--color-primary);
    font-size: 18px;
  }
`;

const InputContainer = styled.div`
  margin: auto;
  max-width: 500px;

  .button-contianer{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
  }
`;
