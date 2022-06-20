import styled from 'styled-components';


export const Container = styled.div`
	.header{
	height: 70px;
	display: flex;
	padding: 1rem;
	align-items: center ;
	justify-content: flex-end;
	background: var(--background-containers);
	
.header.background-day-gray {
	color: #111111;
	background-color: #ebebeb;
	}

.header.background-day-gray > a {
	color: #111111;
	font-size: 1em;
	font-weight: 700;
	
}

    #menu {
	gap: 1rem;
	display: flex;
	transition: 0.2s;
	margin: 2em 2em 2em 0;
    a {
	display: block;
	padding: 0.7rem;
	text-decoration: none;
    }
}

.nav-li {
	font-size: 1em;
	transition: 0.9s;
	color: var(--shape);
	margin-bottom: 1.5em;
	font-weight: semibold;
    
    &:hover {
        border-bottom: solid 0.5px var(--blue-padrao);
    }
    .text-day {
        color: var(--text-day);
    }
}

.switch {
	width: 60px;
	height: 34px;
	margin-right: 2em;
	position: relative;
	display: inline-block;
    
    input {
    width: 0;
    height: 0;
    opacity: 0;
    }
}

.slider {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	cursor: pointer;
	transition: 0.4s;
	position: absolute;
	-webkit-transition: 0.4s;
	background-color: var(--background-day);
    
    &:before {
        left: 4px;
		content: '';
        bottom: 4px;
        width: 26px;
        height: 26px;
        transition: 0.4s;
        position: absolute;
        -webkit-transition: 0.4s;
        box-shadow: 0 0 20px yellow;
		background: var(--background);
        background: rgb(255, 255, 255);
        /* background-image: url('assets/moon-regular.svg'); */
    }
}


input:checked + .slider {
	background: var(--background);
	
}

input:checked + .slider:before {
	background: yellow;
	transform: translateX(26px);
	-ms-transform: translateX(26px);
	-webkit-transform: translateX(26px);
	
	/* sol aqui */

}

.slider.round {
	border-radius: 34px;

	&:before{
		border-radius: 50% ;
		}
	}
}
`