import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";

type WorkPropsType = {
    title: string
    text: string
    src: string

}
export const Work = (props: WorkPropsType) => {
    const {title, text, src} = props
    return (
        <StyledWork>
            <Image src={src} alt=''/>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: #b4c257;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`


const Title = styled.h3`

`

const Text = styled.p`

`



