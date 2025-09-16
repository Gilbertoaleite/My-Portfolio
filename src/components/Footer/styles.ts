import styled from 'styled-components';

export const Container = styled.div`
	.Footer {
		position: flex;
		padding: 2rem 0 2rem 0;
		bottom: 0;
		width: 100%;
		background-color: var(--blue-padrao);
	}

	.container-social {
		margin: 0 auto;
		text-align: center;
		.social {
			display: inline-block;
			margin: 0 auto;
			padding: 0.5em 0.5em 0 0.5em;
			transition: background 0.3s;
			& img {
				width: 32px;
				height: 32px;
			}
			&:hover {
				background: cornflowerblue;
			}
		}
	}

	span, a {
		color: #5882fa;
		text-decoration: none;
	}

	/* Responsividade para dispositivos móveis */
	@media (max-width: 600px) {
		.Footer {
			padding: 1rem 0 1rem 0;
		}
		.container-social {
			.social {
				padding: 0.3em 0.3em 0 0.3em;
				& img {
					width: 24px;
					height: 24px;
				}
			}
		}
		p {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 400px) {
		.Footer {
			padding: 0.5rem 0 0.5rem 0;
		}
		.container-social {
			.social {
				padding: 0.2em 0.2em 0 0.2em;
				& img {
					width: 18px;
					height: 18px;
				}
			}
		}
		p {
			font-size: 0.8rem;
		}
	}
`;