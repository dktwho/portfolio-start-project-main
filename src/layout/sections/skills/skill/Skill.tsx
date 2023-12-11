import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    const {iconId, title, text} = props
    return (
        <StyledSkill>
            <Icon iconId={iconId}/>
            <SkillTitle>{title}</SkillTitle>
            <SkillText>{text}</SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.33);
  margin: 10px;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`