import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/JP_02959.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Alex Korobov</h2>
                    <h1>A Frontend Developer</h1>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
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

`

