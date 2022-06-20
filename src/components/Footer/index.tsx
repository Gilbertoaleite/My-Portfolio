import { Container } from "./styles";
import linkedinImg from "../../assets/img/linkedin.svg";
import instaImg from "../../assets/img/instagram.svg";
import githubImg from "../../assets/img/github.svg";
import Image from "next/image";

export function Footer() {
	return (
		<Container>
			<footer className="Footer">
				<div className="container-social">
				<p>&copy; Desenvolvido por Gilberto A Leite  2022 </p>
				<div className="social">
					<a
						rel="noreferrer noopener"
						target="_blank"
						href="https://instagram.com/gilbertoaleite/">
						<Image src={ instaImg } alt="Icone-Instagram" />
					</a>
				</div>
				<div className="social">
					<a
						rel="noreferrer noopener"
						target="_blank"
						href="https://github.com/gilbertoaleite">
						<Image src={ githubImg } alt="Icone-Github" />
					</a>
				</div>
				<div className="social">
					<a
						rel="noreferrer noopener"
						target="_blank"
						href="https://linkedin.com/in/gilbertoaleite"
					>
						<Image src={ linkedinImg } alt="Icone-LinkedIn" />
					</a>
				</div>
				</div>
			</footer>
		</Container>
	)
};
