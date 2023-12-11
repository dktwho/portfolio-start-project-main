import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field/>
                <Field/>
                <Field as={'textarea'}/>
            </StyledForm>

        </StyledContacts>
    );
};


const StyledContacts = styled.section`

`

const StyledForm = styled.form`

`

const Field = styled.input`

`

