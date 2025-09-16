
import { useTranslation } from 'next-i18next';

import { Container } from "./styles";
import vectorImg from "../../assets/img/Vector.svg";
import linkedinBrands from "../../assets/img/linkedin-brands.svg";
import Image from "next/image";

export function SobreMim() {
	// @ts-ignore
	const { t } = useTranslation('common');
	return (
		<Container>
			<section id="sobre-mim" className="sectOff">
				<div className="container-sobre">
					<div id="UserImage" className="imagem-sobre">
						<img
							src='https://github.com/gilbertoaleite.png'
							alt={ t('aboutMe.photoAlt', 'Foto pessoal') }
						/>
					</div>
					<div className="texto-sobre">
						<h2>{ t('about', 'Sobre mim') }</h2>
						<p>{ t('aboutMe.intro', 'Olá bem vindo ao meu Portfólio, sou desenvolvedor Front-end e tenho conhecimentos nas ferramentas React, Nextjs, Bootstrap, Sass, Styled components e entre outros, sou apaixonado por tecnologia e inovação! sou do estado de São Paulo, e frequentemente estou participando dos bootcamp da Digital Innovation one, e estou cursando nas escolas:') }</p>
						<p>{ t('aboutMe.schools', 'Rocketseat, Alura Oracle One e TreinaWeb, Coursera, Possuo experiências em projetos front-end Nextjs e React') }</p>
						<p>{ t('aboutMe.learning', 'e estou me aperfeiçoando cada vez mais em Next e React, e em Backend em java com Spring Boot.') }</p>
						<p><strong>{ t('aboutMe.available', 'Estou disponível para projetos, CLT, PJ e freelances') }</strong>, { t('aboutMe.contact', 'fique a vontade para entrar em contato comigo pelo Whatsapp, terei um prazer em contribuir com os meus trabalhos 🚀') }</p>
						<div className="botoes-sobre">
							<a
								rel="noreferrer noopener"
								target="_blank"
								className="botao"
								href="https://www.linkedin.com/in/gilbertoaleite/"
							>
								<Image
									src={ linkedinBrands }
									title={ t('aboutMe.linkedinTitle', 'Meu LinkedIn') }
									alt={ t('aboutMe.linkedinAlt', 'logo do linkedin') }
									width={ 25 } height={ 45 }
								/>
								{ t('aboutMe.linkedin', 'Linkedin') }
							</a>
							<a
								className="botao"
								title={ t('aboutMe.cvTitle', 'Meu Currículo no ondrive') }
								rel="noreferrer noopener"
								target="_blank"
								href='https://drive.google.com/file/d/1uSay5U-ovRQ7WG67eFuIomkVBBc5bh5v/view?usp=sharing' download
							>
								<Image
									src={ vectorImg }
									title={ t('aboutMe.cvPdfTitle', 'Meu currículo em pdf') }
									alt={ t('aboutMe.cvPdfAlt', 'Icone-de-anexo') }
									width={ 25 } height={ 45 }
								/>
								{ t('aboutMe.cv', 'Currículo') }
							</a>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
}
