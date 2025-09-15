


import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;

    // Ignorar arquivos públicos e rotas do Next.js
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    // Se já está em /pt ou /en, segue normalmente
    if (pathname.startsWith('/pt') || pathname.startsWith('/en')) {
        return NextResponse.next();
    }

    // Detecta idioma do navegador
    const acceptLang = request.headers.get('accept-language');
    const lang = acceptLang?.startsWith('en') ? 'en' : 'pt';

    return NextResponse.redirect(new URL(`/${lang}${pathname}${search}`, request.url));
}

export const config = {
    matcher: ['/((?!_next|favicon.ico|assets|api|static|.*\\..*).*)'],
};
