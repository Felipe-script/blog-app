import styled from 'styled-components'
import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'
import { Button } from '@/components'

export const Container = styled.div`
	padding-left: 1.6rem;
	padding-right: 1.6rem;
	margin: 0 auto;
	max-width: 60rem;
	height: 100vh;
	position: relative;
`

export const PrimarySection = styled.div`
	justify-content: space-between;
	margin-top: 1.6rem;
`

export const TitlePrimaryArticle = styled.h1`
	font-size: 1.3rem;
	margin-right: 1.6rem;
	width: 90%;
`
export const PrimaryArticle = styled.div`
	display: flex;
	flex-direction: row;
`

export const PrimaryArticleContent = styled.div`
	display: flex;
	flex-direction: column;
`

export const DescriptionPrimary = styled.p`
	width: 90%;
	margin-bottom: 2rem;
`

export const ImagePrimary = styled.img`
	max-width: 100%;
	height: 12rem;
`

export const SecondarySection = styled.div`
	display: flex;
	margin-top: 5rem;
	flex-direction: column;
`

export const CategoriesSection = styled.div`
	display: flex;
	margin: 5rem 0;
	align-items: center;
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
	display: flex;
`

export const ArticleTitle = styled.h1`
	font-size: 1.3rem;
	width: 90%;
`

export const DescriptionArticle = styled.p`
	width: 90%;
	margin-bottom: 2rem;
`

export const Article = styled.div`
	display: flex;
	align-items: center;
`

export const ArticleImage = styled.img`
	max-width: 100%;
	height: 11rem;
`

export const ColumnArticle = styled.div`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
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
	display: flex;
`

export const Footer = styled.footer`
	border-top: 1px solid #cccccc;
	position: absolute;
	bottom: 0;
	width: 100%;
	left: 0;
	padding: 2rem;
`