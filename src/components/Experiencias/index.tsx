import Image from 'next/image';
import { Container } from './styles'
import { useTranslation } from 'next-i18next';

export function Experiencias() {
    const { t } = useTranslation<'common'>();

    return (
        <Container>
            <section id="experiencias">
                <div className="container-experiencias">

                    <h2>{ t('education', 'Educação e Experiências') }</h2>
                    <div className="flex-experiencia">
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>{ t('experiencias.uninove', 'Universidade Nove de Julho | Uninove') }</h3>
                            </div>
                            <p>
                                { t('experiencias.uninoveDesc', 'Tecnologia em Análise e desenvolvimento de sistemas, estou cursando o segundo semestre, com previsão para concluir no primeiro semestre de 2025.') }
                            </p>
                        </div>
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>{ t('experiencias.wizard', 'Inglês básico 2 | Wizard') }</h3>
                            </div>
                            <p>
                                { t('experiencias.wizardDesc', 'Inglês básico II nível de conversação, escrita e entendimento.') }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}
