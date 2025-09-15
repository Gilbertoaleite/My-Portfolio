import { Container } from "./styles";
import whatsImg from "../../assets/img/whatsapp-brands.svg";
import devImg from "../../assets/img/dev.svg";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

export function Presentation() {
	const { t } = useTranslation<'common'>('common');
	return (
		<Container>
			<section id="inicial">
				<div className="container-inicial">
					<div className="texto-inicial">
						<p>{ t('presentation.hello', 'Olá, meu nome é') }</p>
						<h1 id="userName">Gilberto de Araujo Leite</h1>
						<p id="userBio">
							{ t('presentation.bio', 'Desenvolvedor Front-end Next.js | React.') }
						</p>
						<a
							className="whatsapp"
							rel="noreferrer noopener"
							href="https://api.whatsapp.com/send?phone=+55%2011%2096347-1286&text=Sua%20mensagem"
						>
							<Image
								className="whatsapp-icon"
								src={ whatsImg }
								alt={ t('presentation.whatsappAlt', 'Icone whatsapp') }
								width={ 24 }
								height={ 24 }
							/>
							<span>{ t('presentation.whatsapp', 'Whatsapp') }</span>
						</a>
					</div>
					<div className="imagem-inicial">
						<Image className="imagem-inicial" src={ devImg } alt={ t('presentation.devAlt', 'imagem de um boneco com notebook') } />
					</div>
				</div>
			</section>
		</Container>
	);
}