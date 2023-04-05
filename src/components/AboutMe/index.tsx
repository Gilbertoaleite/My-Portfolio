import { Container } from "./styles";
import vectorImg from "../../assets/img/Vector.svg";
import linkedinBrands from "../../assets/img/linkedin-brands.svg";
import Image from "next/image";


export function AboutMe() {

	return (
		<>
			<Container >
		<section id="sobre-mim" className="sectOff">
				<div className="container-sobre">
					<div id="UserImage" className="imagem-sobre">
					<img
						src='https://github.com/gilbertoaleite.png'
						alt="Foto pessoal"
						/>
						</div>
					<div className="texto-sobre">
						<h2>Sobre mim</h2>
						<p>
							Olá bem vindo ao meu Portfólio, sou desenvolvedor Front-end e tenho conhecimentos nas ferramentas React, Nextjs, Bootstrap, 
							Sass, Styled components e entre outros, sou apaixonado por tecnologia e
							inovação! sou do estado de São Paulo, e frequentemente estou participando
							dos bootcamp da Digital Innovation one, e estou cursando nas escolas:
						</p><p> 
								Rocketseat, Alura Oracle One e TreinaWeb, Coursera, Possuo experiências em projetos
								front-end Nextjs e React</p>
						<p> e estou me aperfeiçoando cada vez mais em Next e React, e em Backend em java com Spring Boot. 
							</p>
							<p><strong>Estou disponível para projetos, CLT, PJ e freelances</strong>, fique a vontade para entrar em contato comigo pelo Whatsapp, 
								terei um prazer em contribuir com os meus trabalhos 🚀</p>
						
						<div className="botoes-sobre">
							<a
								rel="noreferrer noopener"
								target="_blank"
								className="botao"
								href="https://www.linkedin.com/in/gilbertoaleite/"
							><Image
									src={ linkedinBrands }
									title="Meu LinkedIn"
									alt="logo do linkedin"
									width={'25px'} height={'45px'}
								/>Linkedin</a
							>
							<a
								className="botao"
								title="Meu Currículo no ondrive"
								rel="noreferrer noopener"
								target="_blank"
								href='https://drive.google.com/file/d/1uSay5U-ovRQ7WG67eFuIomkVBBc5bh5v/view?usp=share_link' download
							>
								<Image 
								src={ vectorImg } 
								title="Meu currículo em pdf"
								alt="Icone-de-anexo" 
								width={'25px'} height={'45px'}
								/>Currículo
							</a>
						</div>
					</div>
				</div>
				</section>
			</Container>
		</>
	)
};
