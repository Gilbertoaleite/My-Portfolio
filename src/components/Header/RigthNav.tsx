import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

li {
    padding: 18px 10px;
}

@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
    color: #fff;
    text-decoration: none;
    }
}
`;

const RightNav = ({ open }) => {
return (
    <Ul open={open}>
    <li><a href="#sobre-mim"> Sobre Mim</a></li>
    <li><a href="#projetos"> Projetos</a></li>
    <li><a href="#habilidades" >Habilidades</a></li>
    <li><a href="#experiencias"> Educação e Experiencias</a></li>
    <li><a href="https://gilbertoaleite-portfolio.netlify.app/eng.html">English</a>
    </li>
    </Ul>
)
}

export default RightNav