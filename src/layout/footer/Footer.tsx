import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Alex</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'} width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Alex Korobov, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.10);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-6px);
  }
  
`

const Copyright = styled.small`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.3;
`


