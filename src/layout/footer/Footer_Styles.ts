import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 22,
    Fmin: 16
})}
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
export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}