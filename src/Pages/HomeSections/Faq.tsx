import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "../../Assets/Svg/AddIcon.svg";
import CollapsIcon from "../../Assets/Svg/CollapsIcon.svg";

export default function Faq() {
  const [toogle, setToogle] = useState("");
  return (
    <Container>
      <ContentContainer>
        <div className="frequent">
          Frequently asked <span>questions</span>
        </div>
        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "one" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("one")}>
            {toogle === "one" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "two" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("two")}>
            {toogle === "two" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "three" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("three")}>
            {toogle === "three" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>
        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "four" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("four")}>
            {toogle === "four" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>
        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "five" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("five")}>
            {toogle === "five" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>
        <div className="content-container">
          <div>
            <div className="content-container-one">
              What are the requirements to get a visa?
            </div>
            <br />
            <div className={toogle === "six" ?"content-container-two":"content-container-two-hide"}>
              The requirement depends on the country you’re applying to. Log in
              to see different countries and their requirements.
            </div>
          </div>
          <div onClick={() => setToogle("six")}>
            {toogle === "six" ? (
              <img src={AddIcon} alt="logo" />
            ) : (
              <img src={CollapsIcon} alt="logo" />
            )}
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  .frequent {
    font-weight: 800;
    text-align: center;
    font-size: 25px;
    margin-bottom:20px;
  }

  span {
    color: var(--color-primary);
  }

  .content-container {
    background:white;
    width: 600px;
    border-bottom: 1px solid rgba(189, 189, 189, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    img {
      cursor: pointer;
    }
  }

  .content-container-one {
    font-weight: 600;
    font-size: 18px;
  }

  .content-container-two {
    font-weight: 400;
    font-size: 15px;
    color: var(--text-light-200);
    max-width: 500px;
    transition:5s;
  }

  .content-container-two-hide {
    display: none;
    font-weight: 400;
    font-size: 18px;
    color: var(--text-light-200);
    max-width: 600px;
    transition:5s;
  }
`;
