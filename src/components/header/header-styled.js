import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	.headerBlob {
		position: absolute;
		right: 0px;
		top: 0px;
		z-index: 0;
	}
	.meHeader {
		position: absolute;
		right: 210px;
		top: 300px;
		z-index: 1;
	}
`

export const HeaderMain = styled.header`
	position: relative;
	justify-content: center;
	padding-right: 5px;
	margin-top: 70px;
	margin-left: -50vw;
	margin-right: auto;
	width: 80vw;
	border: none;
	ul {
		display: flex;
		marker: none;
		list-style-type: none;
		text-decoration: none;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 10px;
	}
	ul li {
		text-decoration: none;
		font-weight: 200;
		font-size: 2.8em;
		padding-right: 40px;
	}
	ul li a:hover {
		color: rgba(255, 255, 255, 0.5);
		cursor: pointer;
	}
	ul li a {
		text-transform: capitalize;
		text-decoration: none;
		color: white;
	}
	ul li .home:after {
		content: '';
		float: left;
		background: #f7484e;
		width: 45%;
		height: 3px;
		border-radius: 100px;
		margin-top: 5px;
	}
`
export const TopHeader = styled.div`
	position: relative;
	justify-content: left;
	padding-right: 5px;
	margin-left: auto;
	margin-right: auto;
	width: 95vw;
	border: none;
	.themeToggle {
		position: absolute;
		width: 3rem;
		height: 3rem;
		margin-right: auto;
		margin-left: 10px;
		margin-top: 12px;
		top: 0px;
	}
`
export const LanguageSelect = styled.select`
	background: transparent;
	margin-left: 5rem;
	font-size: 1rem;
	margin-top: 8px;
	margin-right: auto;
	width: 3rem;
	border: none;
	border-color: #292929;
	appearance: none;
	text-transform: uppercase;
	color: #fff;
	outline: 0px;
	option {
		border: none;
		outline: 0px;
		color: #f7484e;
		background-color: #292929;
	}
`
