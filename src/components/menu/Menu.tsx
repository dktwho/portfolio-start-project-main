import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    const {menuItems} = props
    return (
        <StyledMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`