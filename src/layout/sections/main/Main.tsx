import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/JP_02959.jpg'

export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi There</span>
                <h2>I am Alex Korobov</h2>
                <h1>A Frontend Developer</h1>
            </div>

            <Photo src={photo} />
        </div>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`