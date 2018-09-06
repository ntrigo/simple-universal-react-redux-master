import React from 'react';
import styled from 'styled-components';


const calcSize = (size) => {
	switch(size){
	case -1:
		return '80%'
	case -2:
		return '60%'
	case -3:
		return '40%'
	case 2:
		return '150%'
	case 3:
		return '200%'
	case 4:
		return '250%'
	case 5:
		return '300%'
	case 6:
		return '350%'
	case 7:
		return '400%'
	case 1:
	default:
		return '100%'
	}
}

const Description = styled.p`
	font-family: Simplon;
	color: ${ props => props.theme.color ? props.theme.color.description : '#909090'};
	margin: ${props => props.margin ? props.margin : 0 };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	font-size: ${ props => props.size ? `${calcSize(props.size)}` : '100%' };
	color: ${ props => props.customColor ? props.customColor : ''};
	font-family: ${props => props.fontFamily ? props.fontFamily : 'Simplon'};
`

export default Description;
export { Description }
