import styled from 'styled-components'

import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'

export const Wrapper = styled.div`
	height: 100vh;
`

export const Content = styled.div`
	padding: 1.6rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const InfoPost = styled.div`
	max-width: 50rem;
`

export const Title = styled.h1`
	font-size: 2rem;
	margin-top: 3rem;
`

export const Paragraph = styled.p`
	font-size: 1.6rem;
	line-height: 2.3rem;
`

export const ImagePost = styled.img`
	width: 100%;
	height: 30rem;
	max-width: 50rem;
`