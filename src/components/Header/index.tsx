// import Image from 'next/image';
// import sunImg  from "../../assets/img/sun-regular.svg";


import React, { useEffect, useState } from 'react';
import Burger from './Burger';
import { LanguageMenu } from './LanguageMenu';
import { Container } from './styles';
import { useTranslation } from 'next-i18next';





export function Header() {
    const { t } = useTranslation<'common'>('common');
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark' || storedTheme === 'light') {
                return storedTheme;
            }
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.body.style.backgroundColor = theme === 'dark' ? 'var(--background)' : 'var(--background-day)';
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);

    const handleThemeToggle = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <Container>
                <header className="header">
                    <nav id="nav-menu">
                        {/*  menu mobile  */ }
                        <Burger />
                        {/* menu desktop */ }

                        <LanguageMenu />
                        { mounted && (
                            <label className="switch" title="Botão Modo Noturno" style={ { display: 'flex', alignItems: 'center', gap: 8 } }>

                                <input
                                    type="checkbox"
                                    checked={ theme === 'light' }
                                    onChange={ handleThemeToggle }
                                    id="toggleSwitch"
                                    aria-label={ theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro' }
                                />
                                <span className="slider round"></span>

                            </label>
                        ) }
                    </nav>
                </header>
            </Container>
        </>
    );
}
