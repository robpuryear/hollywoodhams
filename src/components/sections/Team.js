import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Nfts/bighead.svg";
import img2 from "../../assets/Nfts/bighead-1.svg";
import img3 from "../../assets/Nfts/bighead-2.svg";
import img4 from "../../assets/Nfts/bighead-3.svg";
import img5 from "../../assets/Nfts/bighead-4.svg";
import img6 from "../../assets/Nfts/bighead-5.svg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  padding-top: 2rem;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Item = styled.div`
  width: calc(23rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.text};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover{
      img{
          transform: translateY(-2rem) scale(1.2);
      }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${(props) => props.theme.text}, 0.9)`};
  font-weight: 400;
  `;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="Hollywood Ham" position="founder" />
        <MemberComponent img={img2} name="Hollywood Ham" position="founder" />
        <MemberComponent img={img3} name="Hollywood Ham" position="founder" />
        <MemberComponent img={img4} name="Hollywood Ham" position="founder" />
        <MemberComponent img={img5} name="Hollywood Ham" position="founder" />
        <MemberComponent img={img6} name="Hollywood Ham" position="founder" />
      </Container>
    </Section>
  );
};

export default Team;
