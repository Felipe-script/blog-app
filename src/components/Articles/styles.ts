import styled from 'styled-components'

import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'

export const ArticlesSection = styled.div`
	padding: 0 1.6rem;
	display: flex;
	position: relative;
	flex-direction: column;

	${mediaQueries(BREAKPOINTS.MD)`
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	`}
`

export const ArticleTitle = styled.h1`
	font-size: 1.3rem;
	width: 90%;
	${mediaQueries(BREAKPOINTS.MD)`
			font-size: 1.8rem;
	`}
`

export const DescriptionArticle = styled.p`
	width: 90%;
	margin-bottom: 2rem;
	${mediaQueries(BREAKPOINTS.MD)`
			font-size: 1.5rem;
	`}
`

export const Article = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10rem;
	${mediaQueries(BREAKPOINTS.MD)`
		margin-left: 2rem;
	`}
`

export const ArticleImage = styled.img`
	max-width: 100%;
	height: 11rem;
	${mediaQueries(BREAKPOINTS.MD)`
			height: 18rem;
	`}
`

export const ColumnArticle = styled.div`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	${mediaQueries(BREAKPOINTS.MD)`
			width: 30rem;
	`}
`