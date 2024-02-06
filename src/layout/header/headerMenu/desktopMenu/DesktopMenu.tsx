import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const {menuItems} = props
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};




