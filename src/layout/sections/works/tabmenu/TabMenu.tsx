import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    const {menuItems} = props
    return (
        <StyledTabMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};


const StyledTabMenu = styled.nav`


  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
    
`



