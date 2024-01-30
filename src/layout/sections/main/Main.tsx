import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/JP_02959.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
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

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }

  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
`
const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const NameTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})} //font-size: 50px;
          //font-family: 'Josefin Sans', sans-serif;
          //font-weight: 700;
  letter-spacing: 0.05em;
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




