import Image from "next/image";
import { Container } from "./styles";
import iconJs from "../../assets/img/icon-js.svg";
import iconNext from "../../assets/img/icon-next-js.svg";
import iconReact from "../../assets/img/icon-react.svg";
import iconCss from "../../assets/img/icon-css.svg";
import iconHtml from "../../assets/img/icon-html.svg";
import iconPython from "../../assets/img/icon-python.svg";


import { useTranslation } from 'next-i18next';

export function Habilidades() {
	const { t } = useTranslation('common');
	return (
		<Container>
			<section className="sectOff" id="habilidades">
				<div id="titulo-habilidades">
					<h2>{ t('skills', 'Habilidades') }</h2>
				</div>
				<div className="container-habilidades">
					<div className="icones-habilidades">
						<div className="moldura-icone html">
							<Image src={ iconHtml } alt={ t('skills.htmlAlt', 'Icone HTML') } />
							<p>{ t('skills.html', 'HTML') }</p>
						</div>
						<div className="moldura-icone css">
							<Image src={ iconCss } alt={ t('skills.cssAlt', 'Icone CSS') } />
							<p>{ t('skills.css', 'CSS3') }</p>
						</div>
						<div className="moldura-icone python">
							<Image src={ iconPython } alt={ t('skills.pythonAlt', 'Icone Python') } />
							<p>{ t('skills.python', 'Python') }</p>
						</div>
						<div className="moldura-icone javascript">
							<Image src={ iconJs } alt={ t('skills.jsAlt', 'Icone JavaScript') } />
							<p>{ t('skills.js', 'JavaScript') }</p>
						</div>
						<div className="moldura-icone react">
							<Image src={ iconReact } alt={ t('skills.reactAlt', 'Icone React') } />
							<p>{ t('skills.react', 'React.js') }</p>
						</div>
						<div className="moldura-icone next">
							<Image src={ iconNext } alt={ t('skills.nextAlt', 'Icone Nextjs') } />
							<p>{ t('skills.next', 'Next.js') }</p>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
}