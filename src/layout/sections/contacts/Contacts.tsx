import React from 'react';
import {SectionTitle} from "../../../components/commonComponents/SectionTitle";
import {Button} from "../../../components/commonComponents/Button";
import {Container} from "../../../components/commonComponents/Container";
import {S} from './Contacts_Styles'

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field placeholder={'message'} as={'textarea'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};




