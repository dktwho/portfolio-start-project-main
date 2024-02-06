import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/commonComponents/FlexWrapper";
import {S} from '../Skills_Styles'


type SkillPropsType = {
    iconId: string
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    const {iconId, title, text} = props
    return (
        <S.Skill>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};


