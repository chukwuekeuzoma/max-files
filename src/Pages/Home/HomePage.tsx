import styled from "styled-components";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import {
  HomeSectionOne,
  HomeSectionTwo,
  HomeSectionThree,
  HomeSectionFour,
  HomeSectionFive,
  HomeSectionSix,
  Faq,
  HomeSectionSeven
} from "../HomeSections";

export default function HomePage() {
  return (
    <Layout>
      <Nav />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix/>
      <Faq/>
      <HomeSectionSeven/>
      <br/>
      <br/>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100%;
  margin: auto;
  max-width: 1700px;
`;
