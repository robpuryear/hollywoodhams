import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import {dark} from '../../styles/Themes';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }
  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }

  @media (max-width: 40em) {

    &>*:last-child{
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 0 auto;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
}
@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontlg};
}
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;  
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontmd};
}
@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontsm};
}
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;  
  text-align: center;
  font-size: ${(props) => props.theme.fontsm};
}
@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontsm};
}
@media (max-width: 30em) {
  font-size: ${(props) => props.theme.fontxs};
}
`;

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
display: flex;

@media (max-width: 64em) {
width: 100%;

button{
  margin: 0 auto;
}
}
`;

const About = () => {
    return (
        <Section id="about">
            <Container>
            <Box><Carousel/></Box>
            <Box>   
            <Title>
            Welcome To <br />Hollywood Hams
            </Title>
            <SubText>
            Hollywood Hams is a new NFT project that everyone can identify with. No matter your age, gender, nationality, or any other labels that separate us in society, there is always a movie, character from pop culture, tv show, sports, music, or other "Hollywood" nostalgia that resonates with us and brings us back to our childhood or our past where we embrace and treasure these fond memories. 
            </SubText>
            <SubTextLight>
            Hollywood Hams is all about nostalgia and sharing our lives with our community but also we are looking forward to the future and offer support and love to one another, joy, and optimism in a time when it’s in short supply.
            </SubTextLight>
            <ButtonContainer>
            <ThemeProvider theme={dark}>
            <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
            </ButtonContainer>
            </Box>
            </Container>
        </Section>
    );
};

export default About;