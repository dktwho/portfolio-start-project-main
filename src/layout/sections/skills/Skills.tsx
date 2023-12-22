import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={'code'} title={'HTML5'} text={'There are many variations of passages of Lorem Ipsum '}/>
                    <Skill iconId={'css'} title={'CSS3'} text={'Lorem Ipsum has been the industry\'s standard dummy text .'}/>
                    <Skill iconId={'react'} title={'REACT'} text={'Content here, content here\', making it look like readable English.'}/>
                    <Skill iconId={'typescript'} title={'Typescript'} text={'There are many variations of passages of Lorem Ipsum '}/>
                    <Skill iconId={'styled'} title={'styled'} text={'Lorem Ipsum has been the industry\'s standard dummy text .'}/>
                    <Skill iconId={'figma'} title={'figma'} text={'Content here, content here\', making it look like readable English.'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`




