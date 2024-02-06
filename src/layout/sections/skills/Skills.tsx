import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {skillData} from "./skillData";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My skills</SectionTitle>

                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((skill) => {
                        return <Skill key={skill.iconId} iconId={skill.iconId} title={skill.title}
                                      text={skill.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`




