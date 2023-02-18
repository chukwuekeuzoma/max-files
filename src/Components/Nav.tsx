import styled from "styled-components";
import NavIcon from "../Assets/Svg/NavIcon.svg";
import UiButton from "./UiButton";

export default function Nav() {
  return (
    <NavContainer>
      <div className="inner-container">
        <div className="nav-icon-container">
          <img src={NavIcon} alt="logo" />
          <div>Agent information</div>
          <div>Country requirements</div>
          <div>About Us</div>
          <div>Agent information</div>
          <div>Contact Us</div>
        </div>
        <div className="nav-btn-container">
          <UiButton textCasing="capitalize">Sign In</UiButton>
          <div></div>
          <UiButton textCasing="capitalize">Sign Up</UiButton>
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background: var(--text-light-100);

  .inner-container {
    display: flex;
    justify-content: space-between;
  }

  .nav-icon-container {
    display: flex;
    align-items: center;

    div {
      margin-left: 20px;
      cursor: pointer;
      color: var(--text-dark);
      font-weight: 600;
      font-size: 15px;
    }
  }

  .nav-btn-container {
    display: flex;
    align-items: center;
    margin-right: 20px;

    div {
      margin-right: 10px;
    }
  }
`;
