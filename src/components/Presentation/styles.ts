import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 700px) {
        .imagem-inicial {
            display: none !important;
        }
        .texto-inicial {
            margin-top: 1em;
        }
        .imagem-inicial {

            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
        }
        .imagem-inicial > img {
            width: 70%;
            max-width: 220px;
            margin: 0 auto;
            display: block;
        }
        .container-inicial {
            min-height: 180px;
            height: auto;
            flex-direction: column;
            align-items: center;
            gap: 0.5em;
            margin-top: 1.2em;
            padding-top: 3.5em;
        }
    }
    .container-inicial {
	display: flex;
	align-items: center;
	width: 80%;
	margin: 2em auto;
	justify-content: space-between;
	max-width: 1000px;
    
    
    .texto-inicial {
        display: flex;
        flex-direction: column;
        gap: 2px;
        
    }
    .texto-inicial > p {
        font-weight: lighter;
        font-size: 2rem;
    
    }
    .texto-inicial > h1 {
            font-weight: 700;
            font-size: 3rem;
            
            }
        .texto-inicial > h2 {
                font-size: 9rem;
                font-weight: lighter;
                
            }
    }
    .whatsapp {
        padding: 1em 0.8em;
        margin-top: 1em;
        text-align: center;
        background-color: #04b431;
        width: 200px;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        font-weight: 700;
        align-items: center;
        font-size: 1.3rem;
        gap: 10px;
        transition: 0.2s;
        
        &:hover {
            filter: brightness(0.8);
        }
        
        .whatsapp-icon {
            width: 24px !important;
            height: 24px !important;
            margin-right: 4px;
        }
    }
        
    .imagem-inicial {
	width: 90%;
    
    }
`;