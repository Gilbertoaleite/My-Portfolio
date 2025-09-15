// import Image from "next/image";
// import focaImg from '../../assets/img/projetos/foca-img.png';
// import iterImg from '../../assets/img/projetos/inter-img.png';
// import petImg from '../../assets/img/projetos/adote-pet-img.png';
// import barbeariaImg from '../../assets/img/projetos/barbearia-img.png';
// import netflixImg from '../../assets/img/projetos/netflix-img.png';
// import decoderImg from '../../assets/img/projetos/decoder-img.png';
// import alurinhaImg from '../../assets/img/projetos/alurinha-img.png';
// import treinacookImg from '../../assets/img/projetos/treinacook-img.png';
// import dashboardImg from '../../assets/img/projetos/dashboard-img.png';

import { useTranslation } from 'next-i18next';
import { Container } from "./styles";


export function Projetos() {
	const { t } = useTranslation('common');
	return (
		<Container>
			<section className="projetos" id="projetos">
				<h2>{ t('projects') }</h2>
				<div className="container-projetos">
					{/* Projeto 1 */ }
					<div className="item-projeto">
						<h3>{ t('focaTitle', 'Jogo da Foca') }</h3>
						<img src='https://i.imgur.com/NSn8zME.png' />
						<p>{ t('focaDesc', 'Joguinho feito durante a Challenger One da Oracle na Alura.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite.github.io/jogo-da-foca-desafio-alura/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/jogo-da-foca-desafio-alura"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 2 */ }
					<div className="item-projeto">
						<h3>{ t('interTitle', 'Clone do internet banking do Inter') }</h3>
						<img src='https://i.imgur.com/RQjr7rG.png' />
						<p>{ t('interDesc', 'Foi desenvolvido o layout do banco Inter, durante o bootcamp Inter na DIO, ultizando create react app.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://banco-inter-clone.vercel.app/dashboard"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/Banco-inter-clone"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 3 */ }
					<div className="item-projeto">
						<h3>{ t('petTitle', 'Projeto Adote um Pet | TreinaWeb') }</h3>
						<img src='https://i.imgur.com/HyUFqPy.png' />
						<p>{ t('petDesc', 'O projeto foi feito o durante o MultiStack da TreinaWeb, desenvolvido com Next.js, @mui/material, axios e @emotion/styled, e ultilizado o Java com Spring boot para api.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://pet-web-blush.vercel.app/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/PetWeb"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 4 */ }
					<div className="item-projeto">
						<h3>{ t('dashboardTitle', 'Dashboard de Vendas') }</h3>
						<img src='https://i.imgur.com/tApf6gh.png' />
						<p>{ t('dashboardDesc', 'Desenvolvido o dashboard de vendas com Spring e React a parte FrontEnd, feito na primeira aula da semana Spring React do DevSuperior.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilberto-dsvendas.netlify.app"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/projeto-sds3"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 5 */ }
					<div className="item-projeto">
						<h3>{ t('alurinhaTitle', 'Alurinha') }</h3>
						<img src='https://i.imgur.com/YEQPAPk.png' />
						<p>{ t('alurinhaDesc', 'Alurinha, aula de flexbox da Alura.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite.github.io/alurinha-aula-flexbox/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/alurinha-aula-flexbox"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 6 */ }
					<div className="item-projeto">
						<h3>{ t('netflixTitle', 'NETFLIX Clone') }</h3>
						<img src='https://i.imgur.com/l1E066x.png' />
						<p>{ t('netflixDesc', 'Foi desenvolvido em html e com o bootstrap foi o meu primeiro projeto da Dio.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-netflix-clone.netlify.app/index.html"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/InterfaceNetflix"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 7 */ }
					<div className="item-projeto">
						<h3>{ t('treinacookTitle', 'TreinaCook - Receitas') }</h3>
						<img src='https://i.imgur.com/Iwrek7d.png' />
						<p>{ t('treinacookDesc', 'Foi desenvolvido em Next.js e gerado para a pagina estática que deixou o site muito mais rápido.') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-receitas-next-js.vercel.app/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/projeto-com-next-js-treinaweb"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 8 */ }
					<div className="item-projeto">
						<h3>{ t('barbeariaTitle', 'Barbearia Alura') }</h3>
						<img src='https://i.imgur.com/xUS7UvA.png' />
						<p>{ t('barbeariaDesc', 'Barbearia Alura, site fictício de uma Barbearia desenvolvido na aula de front-end da Alura') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://barbearia-alura-fake.netlify.app/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/Barbearia"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
					{/* Projeto 9 */ }
					<div className="item-projeto">
						<h3>{ t('decoderTitle', 'Decodificador de texto') }</h3>
						<img src='https://i.imgur.com/7BNWeK8.png' />
						<p>{ t('decoderDesc', 'Challenge Oracle ONE Lógica de Programação 2022') }</p>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://gilbertoaleite-alura-challeg-decoder.netlify.app/"
						>{ t('projectLink', 'Link do Projeto') }</a>
						<a
							className="botao"
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/Gilbertoaleite/codificador-e-descodificador-alura"
						>{ t('gitLink', 'Link do Git') }</a>
					</div>
				</div>
			</section>
		</Container>
	);
}