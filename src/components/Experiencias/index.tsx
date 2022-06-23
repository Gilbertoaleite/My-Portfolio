import Image from 'next/image';
import { Container } from './styles'


export function Experiencias() {

    return (
        <Container>
            <section id="experiencias">
                <div className="container-experiencias">
                    <h2>Educação e Experiências</h2>
                    {/* <div className="imagem-experiencia-2"></div> */ }
                    <div className="flex-experiencia ">
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>Universidade Nove de Julho | Uninove</h3>
                            </div>
                            <p>
                                Análise e desenvolvimento de sistemas, cursei 2 semestres,
                                no momento está com a matrícula trancada, pretendo retorna o mais breve póssivel.
                            </p>
                        </div>
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>Inglês básico 2 | Wizard</h3>
                            </div>
                            <p>
                                Inglês básico II nível de conversação, escrita e entendimento.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </Container>
    )
};
