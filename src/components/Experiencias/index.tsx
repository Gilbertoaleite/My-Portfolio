import Image from 'next/image';
import { Container } from './styles'


export function Experiencias() {

    return (
        <Container>
            <section id="experiencias">
                <div className="container-experiencias">
                    <h2>Educação e Experiências</h2>
                    {/* <div className="imagem-experiencia-2"></div> */}
                    <div className="flex-experiencia ">
                        <div className="item-experiencia">
                            <div className="faixa-item-experiencia">
                                <h3>Universidade nove de julho | Uninove</h3>
                            </div>
                            <p>
                                Análise e desenvolvimentos de sistemas, cursei 2 semestre,
                                no momento está com a metricula trancada, e pretendo retorna o mais breve póssivel.
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
