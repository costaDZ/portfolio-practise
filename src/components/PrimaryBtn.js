import React from 'react';
import styled from 'styled-components';

function PrimaryBtn({ title }) {
    return (
        <PrimaryBtnStyled>
            {title}
        </PrimaryBtnStyled>
    )
}

const PrimaryBtnStyled = styled.a`
    background-color: var(--primary-color);
    padding: .8rem 1.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
`;

export default PrimaryBtn
