import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: orange;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media(max-width: 63em){
    font-size: ${props => props.theme.fontxxl};
}

`

const Logo = () => {
    return (
        <LogoText>
            <Link to="/">
            Hollywood Hams
            </Link>
        </LogoText>
    );
};

export default Logo;