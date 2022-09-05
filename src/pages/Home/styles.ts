import styled from 'styled-components'
import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'
import { Button } from '@/components'

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const PrimarySection = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 1.6rem;
	margin-top: 1.6rem;
	max-width: 60rem;
	${mediaQueries(BREAKPOINTS.MD)`
		max-width: none;
		width: 100%;
	`}
`

export const TitlePrimaryArticle = styled.h1`
	font-size: 1.3rem;
	margin-right: 1.6rem;
	width: 90%;
	${mediaQueries(BREAKPOINTS.MD)`
			font-size: 3rem;
	`}
`
export const PrimaryArticle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
		${mediaQueries(BREAKPOINTS.MD)`
			max-width: 90rem;
	`}
`

export const PrimaryArticleContent = styled.div`
	display: flex;
	flex-direction: column;
`

export const DescriptionPrimary = styled.p`
	width: 90%;
	margin-bottom: 2rem;
	${mediaQueries(BREAKPOINTS.MD)`
			font-size: 1.6rem;
	`}
`

export const ImagePrimary = styled.img`
	max-width: 100%;
	height: 12rem;
	${mediaQueries(BREAKPOINTS.MD)`
		max-width: none;
		width: 100%;
		height: 30rem;
	`}
`

export const SecondarySection = styled.div`
	max-width: 60rem;
	display: flex;
	margin-top: 5rem;
	flex-direction: column;
	position: relative;
	${mediaQueries(BREAKPOINTS.MD)`
			max-width: 100%;
	`}
`

export const CategoriesSection = styled.div`
	padding: 0 1.6rem;
	display: flex;
	margin: 2rem 0;
	align-items: center;
	justify-content: center
`

export const CategoriesText = styled.p`
	font-size: 2rem;
	color: #8C8C8C;
`

export const CategoryButton = styled.button`
	background-color: #ffffff;
	outline: 0;
	border-radius: 18px;
	padding: 1rem;
	height: 4rem;
	border: 1px solid #7A7A7A;
	color: #666666;
	margin-left: 0.8rem;
	cursor: pointer;
`
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

export const LoadMoreButton = styled.button`
	border-radius: 5px;
	border: 0;
	outline: 0;
	padding: 1rem;
	width: 12rem;
	background-color: #8D8BA7;
	color: #ffffff;
	font-weight: bold;
	align-self: center;
	margin-top: 10rem;
	cursor: pointer;
`
export const TextFooter = styled.p`
	font-size: 1rem;
	color: #666666;
`

export const Footer = styled.footer`
	margin-top: 10rem;
	display: block;
	border-top: 1px solid #cccccc;
	width: 100%;
	padding: 2rem;
`