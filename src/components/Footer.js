import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Twitter from "../Icons/Facebook";

const Section = styled.section`
  min-height: 35vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1{
      font-size: ${props => props.theme.fontxxxl};
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 48em) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span{
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Section>
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="http://twitter.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>

          </IconList>
        </Left>
        <Menu>
          <MenuItem onClick={() => scrollTo("navigation")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>FAQ</MenuItem>
        </Menu>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Hollywood Hams. All rights reserved
        </span>
        <span>
          Made with &#10084; by{" "}
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rob Puryear
          </a>
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
