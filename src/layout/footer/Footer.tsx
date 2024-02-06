import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

export const Footer = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Alex</S.Name>
                <S.SocialList>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={'telegram'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}/>
                        </S.SocialLink>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialLink>
                            <Icon iconId={'instagram'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}/>
                        </S.SocialLink>
                    </S.SocialItem>
                </S.SocialList>
                <S.Copyright>© 2023 Alex Korobov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};




