import Image from "next/image";
import focaImg from '../../assets/img/projetos/foca-img.png';
import iterImg from '../../assets/img/projetos/inter-img.png';
import petImg from '../../assets/img/projetos/adote-pet-img.png';
import barbeariaImg from '../../assets/img/projetos/barbearia-img.png';
import netflixImg from '../../assets/img/projetos/netflix-img.png';
import decoderImg from '../../assets/img/projetos/decoder-img.png';
import alurinhaImg from '../../assets/img/projetos/alurinha-img.png';
import treinacookImg from '../../assets/img/projetos/treinacook-img.png';
import dashboardImg from '../../assets/img/projetos/dashboard-img.png';
import { Container } from "./styles";

export function Projetos() {
	return (
		<Container >
			<section className="projetos" id="projetos">
				<h2 >Projetos</h2>
				<div className="container-projetos">
	{/* Projeto 1 */}
					<div className="item-projeto">
						<h3>Jogo da Foca</h3>
						<Image src={focaImg}  />
						<p>
							Joguinho feito durante a Challenger One da Oracle na Alura.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite.github.io/jogo-da-foca-desafio-alura/"
						>Link do Projeto</a
						>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/jogo-da-foca-desafio-alura"
						>Link do Git</a
						>
						</div>
	{/* Projeto 2 */}

					<div className="item-projeto">
						<h3>Clone do internet banking do Inter</h3>
						<Image src={iterImg} />
						<p>
						Foi desenvolvido o layout do banco Inter, durante o bootcamp Inter na DIO,
						ultizando create react app.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://banco-inter-clone.vercel.app/dashboard"
						>Link do Projeto</a
						>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/Banco-inter-clone"
						>Link do Git</a
						>
						</div>
	{/* Projeto 3 */}			
				<div className="item-projeto">
						<h3>Projeto Adote um Pet | TreinaWeb</h3>
						<Image src={petImg } />
						<p>
							O projeto foi feito o durante o MultiStack da TreinaWeb, desenvolvido com
							Next.js, @mui/material, axios e @emotion/styled, e ultilizado o Java com Spring boot para api.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://pet-web-blush.vercel.app/"
						>Link do Projeto</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/PetWeb"
						>Link do Git</a>
						</div>
	{/* Projeto 4 */}
					<div className="item-projeto">
						<h3>Dashboard de Vendas</h3>
						<Image src={dashboardImg} />
						<p>
							Desenvolvido o dashboard de vendas com Spring e React a parte
							FrontEnd, feito na primeira aula da semana Spring React do
							DevSuperior.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilberto-dsvendas.netlify.app"
						>Link do Projeto</a
						>

						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/projeto-sds3"
						>Link do Git</a>
					</div>
{/* Projeto 5 */}

					<div className="item-projeto">
						<h3>Alurinha</h3>
						<Image src={alurinhaImg} />
						<p>
						Alurinha, aula de flexbox da Alura.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite.github.io/alurinha-aula-flexbox/"
						>Link do Projeto</a
						>

						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/alurinha-aula-flexbox"
						>Link do Git</a>
					</div>

{/* Projeto 6 */}
					<div className="item-projeto">
						<h3>NETFLIX Clone</h3>
						<Image src={netflixImg} />
						<p>
							Foi desenvolvido em html e com o bootstrap foi o meu primeiro projeto
							da Dio.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-netflix-clone.netlify.app/index.html"
						>Link do Projeto</a
						>

						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/InterfaceNetflix"
						>Link do Git</a>
					</div>
{/* Projeto 7 */}
					<div className="item-projeto">
						<h3>TreinaCook - Receitas</h3>
						<Image src={treinacookImg} />
						<p>
							Foi desenvolvido em Next.js e gerado para a pagina estática que
							deixou o site muito mais rápido.
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-receitas-next-js.vercel.app/"
						>Link do Projeto</a
						>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/projeto-com-next-js-treinaweb"
						>Link do Git</a>
					</div>
{/* Projeto 8 */}
					<div className="item-projeto">
						<h3>Barbearia Alura</h3>
						<Image src={barbeariaImg}  />
						<p>
						Barbearia Alura, site fictício de uma Barbearia desenvolvido na aula de front-end da Alura
						</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://barbearia-alura-fake.netlify.app/"
						>Link do Projeto</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/Barbearia"
							>Link do Git</a>
						
					</div>
{/* Projeto 9 */}
					<div className="item-projeto">
						<h3>Decodificador de texto</h3>
						<Image src={decoderImg} />
						<p>Challenge Oracle ONE Lógica de Programação 2022 </p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-alura-challeg-decoder.netlify.app/" >
							Link do Projeto</a>

							<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/codificador-e-descodificador-alura"
						>Link do Git</a>
					</div>
				</div>
			</section>

		</Container>
	)
};