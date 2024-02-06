import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/commonComponents/SectionTitle";
import {Button} from "../../../components/commonComponents/Button";
import {Container} from "../../../components/commonComponents/Container";
import {FlexWrapper} from "../../../components/commonComponents/FlexWrapper";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I am available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  min-height: 30vh;
`