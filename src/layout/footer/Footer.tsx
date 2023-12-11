import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Name></Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'telegram'}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={'instagram'}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Alex Korobov, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`

`

const Name = styled.span`

`

const SocialList = styled.ul`

`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`


