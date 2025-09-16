import styled from 'styled-components';


export const Container = styled.div`

.container-experiencias {
	max-width: 1300px;
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
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 95%;
		margin: 2em auto;
		background: var(--background-containers);
		padding: 2rem;
		border-radius: 9px;
		transition: 0.5s;
		gap: 2rem;
	}
 .reverse {
	display: flex;
	width: 77%;
	justify-content: center;
	margin: 0 auto;
	gap: 1rem;
}

	.item-experiencia {
		flex: 1 1 0;
		min-width: 250px;
		max-width: 50%;
		text-align: left;
		text-decoration: none;
		margin: 0 1rem;
	}

	.faixa-item-experiencia {
		border-bottom: 4px solid #1f36cd;
		margin-bottom: 0.5rem;
		font-weight: 700;
	}
.faixa-item-experiencia > h2 {
	text-align: center;
	font-size: 1.5em;
	margin: 0 auto;
}


	@media (max-width: 900px) {
		.flex-experiencia {
			flex-direction: column;
			align-items: stretch;
			gap: 1.5rem;
			padding: 1.2rem;
		}
		.item-experiencia {
			max-width: 100%;
			margin: 0.5rem 0;
			min-width: 180px;
		}
		.container-experiencias {
			gap: 1.2em;
			padding: 0 0.5em;
		}
	}

	@media (max-width: 600px) {
		.container-experiencias {
			margin: 1.5em auto;
			padding: 0 0.2em;
		}
		.flex-experiencia {
			padding: 0.7rem;
			gap: 1rem;
		}
		.item-experiencia {
			font-size: 0.98em;
			min-width: 120px;
		}
		.faixa-item-experiencia > h3 {
			font-size: 1.1em;
		}
		.container-experiencias > h2 {
			font-size: 1.1em;
		}
	}
`