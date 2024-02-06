import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/commonComponents/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/commonComponents/FlexWrapper";
import {IconWrapper, S} from '../skills/Skills_Styles'

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={'quote'}/>
                </S.IconWrapper>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`