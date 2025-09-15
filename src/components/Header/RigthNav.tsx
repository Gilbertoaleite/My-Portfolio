import React from 'react';
import { useTranslation } from 'next-i18next';
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
    const { t } = useTranslation('common');
    return (
        <Ul open={ open }>
            <li><a href="#sobre-mim" className="nav-li">{ t('about', 'Sobre Mim') }</a></li>
            <li><a href="#projetos" className="nav-li">{ t('projects', 'Projetos') }</a></li>
            <li><a href="#habilidades" className="nav-li">{ t('skills', 'Habilidades') }</a></li>
            <li><a href="#experiencias" className="nav-li">{ t('education', 'Experiências') }</a></li>
        </Ul>
    )
}

export default RightNav