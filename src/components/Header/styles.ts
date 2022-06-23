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
	margin-bottom: 4.5rem;
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
	
	background: var(--background);
    
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
		
        background: rgb(255, 255, 255);
        background-image: url('assets/img/moon-regular.svg'); 
		
		
    }
}
.slider.round {
	border-radius: 34px;

	&:before{
		border-radius: 50% ;
		}
	}


input:checked + .slider {
	background-color: var(--background-day);
	
}

input:checked + .slider:before {
	background: yellow;
	transform: translateX(26px);
	-ms-transform: translateX(26px);
	-webkit-transform: translateX(26px);
	background-image: url('../assets/img/sun-regular.svg');
	

}


}
`