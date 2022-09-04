import styled from 'styled-components'
import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'

export const NavContainer = styled.div`
    background-color: #F7F7F7;
    padding: 1.6rem;
		/* ${mediaQueries(BREAKPOINTS.XL)`
			background: green;
			color: red;
	`} */
	border-bottom: 1px solid #F5F5F5;
	display: flex;
	justify-content: space-between;
`
export const UnorderedList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`

export const Item = styled.li<{auth?: boolean}>`
	font-size: 1.1rem;
	margin-left: 0.8rem;
	font-weight: bold;
	cursor: pointer;
	height: 0;
	padding-bottom: 1.6rem;
	color: ${({ auth }) => auth ? '#FF4571' : '#000000'};
`

export const Logo = styled.img`
	/* width: 10rem;
	height: 8rem; */
	/* width: 10%;
	height: 5%; */
	max-width: 5rem;
	cursor: pointer;
`
