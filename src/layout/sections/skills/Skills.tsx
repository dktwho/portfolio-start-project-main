import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={'code'} title={'HTML5'} text={'There are many variations of passages of Lorem Ipsum '}/>
                <Skill iconId={'css'} title={'CSS3'} text={'Lorem Ipsum has been the industry\'s standard dummy text .'}/>
                <Skill iconId={'react'} title={'REACT'} text={'Content here, content here\', making it look like readable English.'}/>
                <Skill iconId={'typescript'} title={'Typescript'} text={'There are many variations of passages of Lorem Ipsum '}/>
                <Skill iconId={'styled'} title={'styled'} text={'Lorem Ipsum has been the industry\'s standard dummy text .'}/>
                <Skill iconId={'figma'} title={'figma'} text={'Content here, content here\', making it look like readable English.'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #9a9795;
  min-height: 100vh;
`




