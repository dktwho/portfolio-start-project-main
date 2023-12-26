import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
  

`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};

  padding: 7px 15px;
  border-radius: 5px;

  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${theme.colors.font};
  letter-spacing: 0.6px;

  &::placeholder {
    color: ${theme.colors.placeHolderColor};
    text-transform: capitalize;
  }

  &:hover {
    border: 1px solid ${theme.colors.placeHolderColor};
    background-color: ${theme.colors.primaryBg};

    &::placeholder {
      font-size: 16px;
    }
  }

  &:focus {
    outline-color: ${theme.colors.accent};
    outline-style: outset;
  }

`

