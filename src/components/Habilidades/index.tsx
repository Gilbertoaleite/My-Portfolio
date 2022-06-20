import Image from "next/image";
import { Container } from "./styles";
import iconJs from "../../assets/img/icon-js.svg";
import iconNext from "../../assets/img/icon-next-js.svg";
import iconReact from "../../assets/img/icon-react.svg";
import iconCss from "../../assets/img/icon-css.svg";
import iconHtml from "../../assets/img/icon-html.svg";
import iconPython from "../../assets/img/icon-python.svg";


export function Habilidades() {
	return (
	
	<Container>
	<section className="sectOff" id="habilidades">
			<div id="titulo-habilidades">
			<h2>Habilidades</h2>
				</div>	
				<div className="container-habilidades">
					<div className="icones-habilidades">
						<div className="moldura-icone html">
							<Image src={iconHtml} alt="Icone HTML" />
							<p>HTML</p>
						</div>

						<div className="moldura-icone css">
							<Image src={iconCss} alt="Icone CSS" />
							<p>CSS3</p>
						</div>

						<div className="moldura-icone python">
							<Image src={iconPython} alt="Icone Python" />
							<p>Python</p>
						</div>
						
						<div className="moldura-icone javascript">
							<Image src={iconJs} alt="Icone JavaScript" />
							<p>JavaScript</p>
						</div>
						
						<div className="moldura-icone react">
							<Image src={iconReact} alt="Icone React" />
							<p>React.js</p>
						</div>

						<div className="moldura-icone next">
							<Image src={iconNext} alt="Icone Nextjs" />
							<p>Next.js</p>
						</div>
					</div>
				</div>
			</section>
	</Container>

	)
}