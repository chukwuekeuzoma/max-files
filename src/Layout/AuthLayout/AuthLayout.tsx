import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AuthImage from "../../Assets/Svg/AuthImage.svg";
import Logo from "../../Assets/Svg/AuthLogo.svg";

export default function AuthLayout() {
  return (
    <Layout>
      <ImageContainer>
        <AuthLogo src={Logo} />
        <div></div>
      </ImageContainer>
      <FormContainer>
        <div className="form-container-inner">
          <Suspense fallback="Loading.....">
            <Outlet />
          </Suspense>
        </div>
      </FormContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  gap: 20px;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
  max-width:1700px;
  margin:auto;
`;

const ImageContainer = styled.div`
  background-size: conver;
  background-repeat: no-repeat;
  background-image: url(${AuthImage});
  height: 100%;
  position: relative;

  div {
    width: 500px;
  }
`;

const AuthLogo = styled.img`
  margin-top: 40px;
`;

const FormContainer = styled.div`
  width: 100%;

  .form-container-inner {
    width: 80%;
    height: 100%;
    margin: auto;
  }
`;
