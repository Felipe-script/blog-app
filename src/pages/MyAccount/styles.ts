import styled, { css } from 'styled-components'

import { mediaQueries, BREAKPOINTS } from '@/utils/media-query'

export const Wrapper = styled.div`
	height: 100vh;
`

export const Content = styled.div`
	padding: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FormContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`

export const Title = styled.h1`
	font-size: 2rem;
	margin-top: 3rem;
`
export const SectionImagePreview = styled.div `
	display: flex;
	flex-direction: column;
`

export const ImagePreview = styled.img`
	margin-top: 2rem;
	max-width: 40rem;
	height: 20rem;
`

export const Form = styled.form`
	width: 100%;
	${mediaQueries(BREAKPOINTS.MD)`
		width: 80rem;
	`}
`

export const Label = styled.label`
	display: block;
	font-size: 1.4rem;
	margin-bottom: 2rem;
`

const CommonInput = css`
	outline: 0;
	display: block;
	padding: 1rem;
	border-radius: 5px;
	&::placeholder {
		color: #666666;
	}
`

export const InputTitle = styled.input`
	${CommonInput};
	border: 1px solid #DADADA;
	font-size: 1.3rem;
	width: 100%;
	height: 5rem;
	margin-bottom: 2rem;
`

const CommonTextArea = css`
	${CommonInput};
	border: 3px solid #DADADA;
	font-size: 1.6rem;
	resize: none;
`

export const InputFile = styled.input``

export const TextAreaSmallDescription = styled.textarea`
	${CommonTextArea};
	width: 90%;
	height: 20rem;
	margin-bottom: 2rem;
`
export const TextAreaContent = styled(TextAreaSmallDescription)`
	height: 40rem;
`

export const ContentSelect = styled.div`
	margin: 2rem 0;
`

export const SelectCategory = styled.select`
	border-radius: 5px;
	border: 1px solid #DADADA;
	padding: 0.5rem;
	width: 30rem;
	height: 5rem;
`

export const OptionCategory = styled.option``


export const Submit = styled.button`
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
	margin-bottom: 2rem;
`