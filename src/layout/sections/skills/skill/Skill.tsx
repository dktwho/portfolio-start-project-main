import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={'code'}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</SkillText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`

`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`