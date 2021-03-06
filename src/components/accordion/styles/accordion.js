import styled from 'styled-components/macro'

export const Container = styled.div`
	border-bottom: 8px solid #222;
	display: flex;
`

export const Inner = styled.div`
	max-width: 815px;
	margin: auto;
	padding: 70px 45px;
	display: flex;
	flex-direction: column;
`

export const Item = styled.div`
	width: 100%;
	max-width: 700px;
	margin: auto;
	margin-bottom: 0.625rem;
	color: aliceblue;
`

export const Header = styled.div`
	margin-bottom: 1px;
	padding: 0.8em 1.2em;
	background: #303030;
	font-size: 26px;
	font-weight: normal;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	user-select: none;

	img {
		filter: brightness(0) invert(1);
		width: 1.5rem;

		@media (max-width: 600px) {
			width: 1rem;
		}
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`

export const Body = styled.div`
	height: 100%;
	max-height: 1200px;
	padding: 0.8em 2.2em 0.8em 1.2em;
	background: #303030;
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	white-space: pre-wrap;
	user-select: none;
	animation: appear 0.35s ease forwards;

	@media (max-width: 600px) {
		font-size: 1rem;
		line-height: 1.4;
	}

	@keyframes appear {
		from {
			height: 0;
		}
		to {
			height: 100%;
		}
	}
`

export const Title = styled.div`
	margin-top: 0;
	margin-bottom: 3rem;
	text-align: center;
	font-size: 50px;
	line-height: 1.1;
	color: white;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`
