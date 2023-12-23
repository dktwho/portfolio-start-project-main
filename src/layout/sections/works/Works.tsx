import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/Rectangle 14.png'
import timerImg from '../../../assets/images/Rectangle 16.png'
import {Container} from "../../../components/Container";

const worksItems = ['all', 'landing page', 'react', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <Menu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'}>
                    <Work
                        text={'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        title={'Social Network'} src={socialImg}/>
                    <Work
                        text={'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        title={'Timer'} src={timerImg}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #47cad5;
`