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
  margin-bottom: 40px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const ListItem = styled.li`
    
`



