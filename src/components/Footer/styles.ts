import styled from 'styled-components';

export const Container = styled.div`
	.Footer {
	position: flex;
    padding: 2rem 0 2rem 0;
    bottom: 0;
    width: 100%;
	background-color: var(--blue-padrao) ;

}

.container-social{
	margin: 0 auto;
	text-align: center;
	.social {
		display: inline-block;
		margin: 0 auto;
		padding: 0.5em 0.5em 0 0.5em;
		
		&:hover {
			background: cornflowerblue;
		}
	}
}
span, a {
	color: #5882fa;
	text-decoration: none;
}
`;