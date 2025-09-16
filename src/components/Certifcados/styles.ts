import styled from 'styled-components';

export const Container = styled.div`
	.container-experiencias {
				max-width: 1100px;
				width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		text-align: center;
		align-content: center;
		margin: 3em auto;
		gap: 2em;
	}

	.container-experiencias > h2 {
		font-size: 1.5em;
		text-align: center;
		font-weight: 700;
	}

	.flex-experiencia {
			width: 100%;
			max-width: 1100px;
		display: flex;
		justify-content: center;
		margin: 2em auto;
		background: var(--background-containers);
		padding: 2rem;
		border-radius: 9px;
		transition: 0.5s;
	}

	.item-experiencia {
		text-align: left;
		align-items: center;
		text-decoration: none;
		width: 100%;
	}

	.faixa-item-experiencia {
		border-bottom: 6px solid #1f36cd;
	}

	.faixa-item-experiencia > h2 {
		text-align: center;
		font-size: 1.5em;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		.flex-experiencia {
			flex-direction: column;
			align-items: center;
			padding: 1.9rem 0.5rem;
			width: 98%;
			gap: 1em;
		}
		.item-experiencia {
			text-align: initial;
			margin-bottom: 1.2em;
		}
	}
`;