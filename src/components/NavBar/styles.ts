import styled from 'styled-components'
import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'

export const NavContainer = styled.div`
  background-color: #F7F7F7;
  padding: 1.6rem;
	border-bottom: 1px solid #F5F5F5;
	display: flex;
	justify-content: space-between;
`
export const UnorderedList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
`

export const Item = styled.li<{ auth?: boolean }>`
	font-size: 1.1rem;
	margin-left: 0.8rem;
	font-weight: bold;
	cursor: pointer;
	height: 0;
	padding-bottom: 1.6rem;
	color: ${({ auth }) => auth ? '#FF4571' : '#000000'};
	${mediaQueries(BREAKPOINTS.MD)`
			font-size: 1.4rem;
	`}
`

export const Logo = styled.img`
	max-width: 5rem;
	cursor: pointer;
	${mediaQueries(BREAKPOINTS.MD)`
		max-width: 8rem;
	`}
`
