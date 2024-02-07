import React from 'react';
import {SectionTitle} from "../../../components/commonComponents/SectionTitle";
import {TabMenu} from "./tabmenu/TabMenu";
import {FlexWrapper} from "../../../components/commonComponents/FlexWrapper";
import {Work} from "./work/Work";
import {Container} from "../../../components/commonComponents/Container";
import {worksData} from "./worksData";
import {S} from './Works_Styles'

const worksItems = ['all', 'landing page', 'react', 'spa']

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {worksData.map((work) => {
                        return <Work key={work.title} text={work.text} title={work.title} src={work.src}
                                     code={work.code} demo={work.demo}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};


