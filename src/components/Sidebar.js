import React from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';


const Sidebar = () => {
    return (
        <SidebarStyled>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3em;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    z-index:2;
`
export default Sidebar;

