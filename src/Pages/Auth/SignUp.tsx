import React, { useState } from "react";
import UiInput from "../../Components/UiInput";
import styled from "styled-components";
import UiCheckBox from "../../Components/UiCheckBox";
import UiButton from "../../Components/UiButton";
import SignUpUser from "../../types/SignUpUser";
import GoogleLogo from "../../Assets/Svg/Google.svg";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpUser>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    cPassword: "",
    isAgent: null,
  });
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleChange(event: { name: string; value: string | null }) {
    setFormData({
      ...formData,
      [event.name]: event.value,
    });
  }

  return (
    <>
      <WelcomeContainer>
        <div>
          Welcome!
          <span>This will only take a minute!</span>
        </div>
      </WelcomeContainer>
      <SignUpAgentText>
        Sign up as an agent instead?<span>Sign up as agent</span>
      </SignUpAgentText>
      <GridSpacer>
        <UiInput
          placeHolder="First name*"
          value={formData.firstName}
          name="firstName"
          // error={errors.firstName}
          onChange={handleChange}
        />
        <UiInput
          placeHolder="Last name*"
          name="lastName"
          value={formData.lastName}
          // error={errors.lastName}
          onChange={handleChange}
        />
        <UiInput
          placeHolder="Email address*"
          name="email"
          value={formData.email}
          // error={errors.email}
          onChange={handleChange}
        />
        <UiInput
          type="phone"
          placeHolder="e.g 08144045239"
          name="phone"
          value={formData.phoneNumber}
          // error={errors.phoneNumber}
          onChange={handleChange}
        />
        <UiInput
          type="password"
          placeHolder="Password*"
          name="password"
          value={formData.password}
          // error={errors.password}
          onChange={handleChange}
        />
        <UiInput
          type="password"
          placeHolder="Confirm password*"
          name="cPassword"
          value={formData.cPassword}
          // error={errors.cPassword}
          onChange={handleChange}
        />
      </GridSpacer>
      <br />
      <UiCheckBox checked={isChecked} onChange={handleCheckboxChange}>
        keep me sign in
      </UiCheckBox>
      <br />
      <ButtonContanier>
        <UiButton textCasing="capitalize">Sign Up</UiButton>
        <SignWithGoogle>
          <div>or sign in with</div>
          <img src={GoogleLogo} alt="Googlelogo" />
        </SignWithGoogle>
      </ButtonContanier>
      <NoAccount>
       Already have an account? 
        <span>
          <Link to="/signin" className="links">
            Sign In
          </Link>
        </span>
      </NoAccount>
    </>
  );
}

const WelcomeContainer = styled.div`
  div {
    margin-top: 25%;
    font-weight: 800;
    font-size: 36px;
    color: var(--text-dark);
  }

  span {
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    color: var(--text-light-200);
  }
`;

const SignUpAgentText = styled.div`
  text-align: start;
  font-weight: 400;
  font-size: 15px;
  margin-top: 10px;

  span {
    color: var(--color-primary);
    cursor: pointer;
    padding-left: 5px;
  }
`;

const GridSpacer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12px;
  margin-top: 40px;
`;

const ButtonContanier = styled.div`
  display: flex;
  align-items: center;
`;

const SignWithGoogle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    cursor: pointer;
  }

  div {
    font-weight: 400;
    font-size: 13px;
    margin-right: 10px;
  }
`;

const NoAccount = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 13px;
  margin-top: 10px;

  span {
    color: var(--color-primary);
    cursor: pointer;
    padding-left: 5px;
  }
`;
