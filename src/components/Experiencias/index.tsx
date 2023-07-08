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
                                Tecnlogia em Análise e desenvolvimento de sistemas, estou cursando o segundo semestre, 
                                com previsão para concluir no primeiro semestre de 2025.
                                
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
