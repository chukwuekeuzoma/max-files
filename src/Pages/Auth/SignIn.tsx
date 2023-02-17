import React, { useState } from "react";
import { Link } from "react-router-dom";
import UiInput from "../../Components/UiInput";
import styled from "styled-components";
import UiCheckBox from "../../Components/UiCheckBox";
import UiButton from "../../Components/UiButton";
import GoogleLogo from "../../Assets/Svg/Google.svg";

export default function SignIn() {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const [loading, setLoading] = useState(false);
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
      <WelcomeBackConatiner>
        <div>
          Welcome back!
          <span>We’re always excited to have you back.</span>
        </div>
      </WelcomeBackConatiner>
      <UiInput
        placeHolder="Email*"
        value={formData.email}
        name="email"
        // error={errors.email}
        onChange={handleChange}
      />
      <br />
      <UiInput
        type="password"
        placeHolder="Password*"
        name="password"
        value={formData.password!}
        // error={errors.password}
        onChange={handleChange}
      />
      <br />
      <UiCheckBox checked={isChecked} onChange={handleCheckboxChange}>
        keep me sign in
      </UiCheckBox>
      <br />
      <ButtonContanier>
        <UiButton textCasing="capitalize">Sign In</UiButton>
        <SignWithGoogle>
          <div>or sign in with</div>
          <img src={GoogleLogo} alt="Googlelogo" />
        </SignWithGoogle>
      </ButtonContanier>
      <NoAccount>
        Don’t have an account?
        <span>
          <Link to="/signup" className="links">
            Sign Up
          </Link>
        </span>
      </NoAccount>
    </>
  );
}

const WelcomeBackConatiner = styled.div`
  div {
    margin-top: 30%;
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
