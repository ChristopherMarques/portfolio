import styled from 'styled-components'

export const TopContainer = styled.div`
	position: relative;
	justify-content: center;
	padding-right: 5px;
	margin-top: 15vw;
	margin-left: 25vw;
	h1 {
		font-weight: 400;
		font-size: 4.5em;
		color: white;
	}
	h1 span {
		color: #4871f7;
	}
	h2 {
		font-weight: 300;
		font-size: 2.8em;
		margin-top: 17px;
		color: #f7484e;
	}
`
export const MiddleContainer = styled.div`
	position: relative;
	justify-content: center;
	padding-right: 5px;
	margin-top: 15vw;
	margin-left: 20vw;
	.middleBlob {
		position: absolute;
		z-index: 0;
	}
	.meMiddle {
		position: absolute;
		z-index: 1;
	}
`
export const Button = styled.button`
	width: 178px;
	margin-top: 32px;
	color: white;
	font-weight: 400;
	font-size: 1.5em;
	background: #4871f7;
	border: none;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	height: 46px;
	:hover {
		transition: ease-in-out 0.2s;
		background: transparent;
		border: 1px solid #4871f7;
	}
`
