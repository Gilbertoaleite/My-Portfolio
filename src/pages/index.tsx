
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Gilberto A Leite Frontend" />
        <meta name="description" content="Desenvolvedor Front-end Web React e Next" />
        <title>Gilberto Dev Front-end</title>
      </Head>
      {/* Conteúdo da Home pode ser adicionado aqui */ }
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
