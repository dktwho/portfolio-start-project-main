import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}
export const Icon = (props: IconPropsType) => {
    const {iconId, width, height, viewBox} = props
    return (
        // <svg width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path
        //         d="M18.3125 42.0645L27.2623 6.6875L31.4375 7.87241L22.4878 43.3125L18.3125 42.0645Z" fill="#7572D5"/>
        //     <path
        //         d="M13.5025 12.6875L16.5625 15.9278L7.99501 25.0001L16.5625 34.0721L13.5025 37.3125L1.875 25.0001L13.5025 12.6875Z" fill="#7572D5"/>
        //     <path
        //         d="M36.4976 12.6875L33.4375 15.9278L42.0051 25.0001L33.4375 34.0721L36.4976 37.3125L48.125 25.0001L36.4976 12.6875Z" fill="#7572D5"/>
        //     <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        // </svg>

    <svg width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${iconsSprite}#${iconId}`}/>
    </svg>
    );
};


