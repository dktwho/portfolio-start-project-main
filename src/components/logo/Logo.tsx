import React from 'react';
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <a href="#">
            <Icon iconId={'css'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
            <Icon iconId={'styled'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
            <Icon iconId={'react'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
        </a>
    );
};
