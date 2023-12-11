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

`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`