import Image from 'next/image';
import { Container } from './styles'
import { useTranslation } from 'next-i18next';

export function Experiencias() {
    const { t } = useTranslation();

    return (
        <Container>
            <section id="experiencias">
                <div className="container-experiencias">
                
                    <h2>{ t('education', 'Educação e Experiências') }</h2>
                    <div className="flex-experiencia ">
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>Universidade Cruzeiro do Sul</h3>
                                
                                <p>
                                    
                                    { t('experiencias.cruzeiroDesc', 'Tecnologia em Análise e desenvolvimento de sistemas, estou cursando o ultimo semestre, terminado em dezembro de 2025.') }
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
                </div>
            </section>
        </Container>
    );
}
