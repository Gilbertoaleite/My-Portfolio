
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// SVGs inline para bandeiras PT e EN
const FlagPT = () => (
    <span style={ { fontSize: 18, marginRight: 6 } } role="img" aria-label="Português">🇧🇷</span>
);
const FlagEN = () => (
    <span style={ { fontSize: 18, marginLeft: 6 } } role="img" aria-label="English">🇺🇸</span>
);

export const LanguageMenu: React.FC = () => {
    const { i18n } = useTranslation();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const currentLang = i18n.language;

    useEffect(() => {
        setMounted(true);
        // Ao montar, verifica se há idioma salvo no localStorage
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('selectedLanguage');
            if (savedLang && savedLang !== i18n.language && typeof i18n.changeLanguage === 'function') {
                i18n.changeLanguage(savedLang);
                router.replace(router.asPath, router.asPath, { locale: savedLang });
            }
        }
    }, []);

    const handleToggle = async () => {
        const nextLang = currentLang === 'pt' ? 'en' : 'pt';
        if (typeof window !== 'undefined' && typeof i18n.changeLanguage === 'function') {
            await i18n.changeLanguage(nextLang);
            localStorage.setItem('selectedLanguage', nextLang);
            router.push(router.asPath, router.asPath, { locale: nextLang });
        }
    };

    if (!mounted) return null;

    return (
        <button
            className="language-menu-btn"
            onClick={ handleToggle }
            aria-label="Alternar idioma"
            title={ currentLang === 'pt' ? 'Mudar para English' : 'Switch to Portuguese' }
        >
            { currentLang === 'pt' ? <FlagPT /> : <FlagEN /> }
        </button>
    );
};
