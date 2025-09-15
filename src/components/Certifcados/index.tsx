import { useTranslation } from 'next-i18next';
import { Container } from './styles';

export function Certificados() {
    const { t } = useTranslation('common');
    return (
        <Container>
            <section className="flex-experiencia">
                <div className="item-experiencia">
                    <div className="item-experiencia">
                        <div className="faixa-item-experiencia">
                            <h2>{ t('certificados.title', 'Certificados') }</h2>
                        </div>
                        <p>
                            { t('certificados.react', 'Desenvolvedor React') }<br />
                            TreinaWeb / (fevereiro/2022) { t('certificados.certificate', 'Certificado') }:
                            <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.treinaweb.com.br/certificado/NHJNE9MMLBPD"
                                title={ t('certificados.view', 'Para visualizar o certificado') }
                            ><span>{ t('certificados.link', 'Link') }</span></a>
                        </p>
                        <p>
                            { t('certificados.htmlcss', 'HTML5 e CSS3 - Desenvolvimento web Avançado') }<br />
                            TreinaWeb / (fevereiro/2022) { t('certificados.certificate', 'Certificado') }:
                            <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.treinaweb.com.br/certificado/VKNMLPIDASUM"
                                title={ t('certificados.view', 'Para visualizar o certificado') }
                            ><span>{ t('certificados.link', 'Link') }</span></a>
                        </p>
                        <p>
                            { t('certificados.next', 'Next.js – Fundamentos') }<br />
                            TreinaWeb / (fevereiro/2022) { t('certificados.certificate', 'Certificado') }:
                            <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.treinaweb.com.br/certificado/UOMXX0N7OWJX"
                                title={ t('certificados.view', 'Para visualizar o certificado') }
                            ><span>{ t('certificados.link', 'Link') }</span></a>
                        </p>
                        <p>
                            { t('certificados.python', 'Python Fundamentos') }<br />
                            TreinaWeb / (outubro/2021) { t('certificados.certificate', 'Certificado') }:
                            <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.treinaweb.com.br/certificado/EBMXRYLWWHA1"
                                title={ t('certificados.view', 'Para visualizar o certificado') }
                            ><span>{ t('certificados.link', 'Link') }</span></a>
                        </p>
                        <p>
                            { t('certificados.pessoal', 'Desenvolvimento Pessoal - ONE') }<br />
                            Alura / (janeiro/2022) { t('certificados.certificate', 'Certificado') }:
                            <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://cursos.alura.com.br/degree/certificate/fd51c71c-4cc6-48fb-b0be-7de1ad8274f7"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>
                        <p>
                            Iniciante Em Programação – ONE
                            Alura / (feveiro/2022) Cerificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://cursos.alura.com.br/degree/certificate/a28b39f5-096c-4c91-bc08-85086d974186"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>
                        <p>
                            Bootcamp Impulso React Web Developer
                            DIO / (novembro/2021) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/D8A48E2E"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>
                        <p>
                            Bootcamp JavaScript Game Developer
                            DIO / (novembro/2021) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/E1426E1E/share"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>
                        <p>
                            Bootcamp Spread Java Developer
                            DIO / (dezembro/2021) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/0F34F238/share"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p> <p>
                            Bootcamp Inter Frontend Developer
                            DIO / (setembro/2021) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/9EA1467E/share"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>	<p>
                            Bootcamp Eduzz Fullstack Developer #2
                            DIO / (janeiro/2022) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/F51A9B05"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p>
                        <p>
                            Bootcamp GFT Start Java #3
                            DIO / (janeiro/2022) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/C7B09B8A/share"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >
                        </p> <p>
                            Bootcamp MRV Fullstack Developer
                            DIO / (janeiro/2022) Certificado: <a
                                rel="noreferrer noopener"
                                className="item-experiencia"
                                target="_blank"
                                href="https://www.dio.me/certificate/C735C454"
                                title="Para visualizar o certificado"
                            ><span>Link</span></a >

                        </p>
                    </div>
                </div>

            </section>
        </Container>
    )
};
