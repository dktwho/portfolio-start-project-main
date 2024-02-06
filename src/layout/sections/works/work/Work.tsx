import React from 'react';
import {Link} from "../../../../components/link/Link";
import {Button} from "../../../../components/commonComponents/Button";
import {S} from '../Works_Styles'

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    const {title, text, src} = props
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={src} alt=''/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </S.Description>
        </S.Work>
    );
};







