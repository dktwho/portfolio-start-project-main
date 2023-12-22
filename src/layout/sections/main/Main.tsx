import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/JP_02959.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <NameTitle>I am <span>Alex Korobov</span></NameTitle>
                        <MainTitle>A Frontend Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt={''}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #9a9795;
  display: flex;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const NameTitle = styled.h2`
  font-size: 50px;
  font-family: 'Josefin Sans', sans-serif;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
      
    }
  }
`

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 4;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`


