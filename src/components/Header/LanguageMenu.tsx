
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';

// SVGs inline para bandeiras PT e EN
const FlagPT = () => (
    <span style={ { fontSize: 18, marginRight: 6 } } role="img" aria-label="Português">🇧🇷</span>
);
const FlagEN = () => (
    <span style={ { fontSize: 18, marginLeft: 6 } } role="img" aria-label="English">🇺🇸</span>
);

export const LanguageMenu: React.FC = () => {
    // Fix for "A instanciação de tipo é muito profunda e possivelmente infinita."
    // Use a type assertion to avoid deep type inference issues with i18n
    const i18nAny = i18n as any;
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleToggle = () => {
        const nextLang = i18n.language === 'pt' ? 'en' : 'pt';
        if (typeof window !== 'undefined' && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(nextLang, () => {
                localStorage.setItem('selectedLanguage', nextLang);
                if (router.locale !== nextLang) {
                    router.push(router.asPath, router.asPath, { locale: nextLang });
                }
            });
        }
    };

    if (!mounted) return null;

    return (
        <button
            className="language-menu-btn"
            onClick={ handleToggle }
            aria-label="Alternar idioma"
            title={ i18n.language === 'pt' ? 'Mudar para English' : 'Switch to Portuguese' }
        >
            { i18n.language === 'pt' ? <FlagPT /> : <FlagEN /> }
        </button>
    );
};
