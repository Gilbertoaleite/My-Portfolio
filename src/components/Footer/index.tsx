import { Container } from "./styles";
import linkedinImg from "../../assets/img/linkedin.svg";
import instaImg from "../../assets/img/instagram.svg";
import githubImg from "../../assets/img/github.svg";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

export function Footer() {
	const { t } = useTranslation('common');
	return (
		<Container>
			<footer className="Footer">
				<div className="container-social">
					<p>&copy; { t('footer.copyright', 'Desenvolvido por Gilberto A Leite 2022') }</p>
					<div className="social">
						<a
							rel="noreferrer noopener"
							target="_blank"
							href="https://instagram.com/gilbertoaleite/"
						>
							<Image src={ instaImg } alt={ t('footer.instagramAlt', 'Icone-Instagram') } />
						</a>
					</div>
					<div className="social">
						<a
							rel="noreferrer noopener"
							target="_blank"
							href="https://github.com/gilbertoaleite"
						>
							<Image src={ githubImg } alt={ t('footer.githubAlt', 'Icone-Github') } />
						</a>
					</div>
					<div className="social">
						<a
							rel="noreferrer noopener"
							target="_blank"
							href="https://linkedin.com/in/gilbertoaleite"
						>
							<Image src={ linkedinImg } alt={ t('footer.linkedinAlt', 'Icone-LinkedIn') } />
						</a>
					</div>
				</div>
			</footer>
		</Container>
	);
}
