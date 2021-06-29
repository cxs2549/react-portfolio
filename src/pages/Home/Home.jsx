import styled from 'styled-components'
import Section from '../../components/layout/Navbar/Menu/Section'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import js from '../../assets/javascript.png'
import mongo from '../../assets/mongo.png'
import express from '../../assets/express.png'
import git from '../../assets/git.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'
import traversy from '../../assets/traversy.png'
import academind from '../../assets/academind.png'

import Hero from './Hero'

const HomeWrapper = styled.div`
	overflow-y: auto;
	z-index: -100;
	margin-top: 20%;
	@media screen and (min-width: 768px) {
		margin-top: 4%;
	}
	@media screen and (min-width: 1280px) {
		margin-top: 3%;
	}
	#info {
		z-index: 100;
		position: relative;
		margin: 0 auto;
		@media screen and (min-width: 768px) {
			margin: 0 48px;
			max-width: 1080px;
			margin-top: 7%;
		}
		@media screen and (min-width: 1280px) {
			/* padding: 0; */
			margin: 0 auto;
			margin-top: 7%;
		}
	}
`

const Home = () => {
	const skills = [
		{ name: 'HTML', img: html },
		{ name: 'CSS', img: css },
		{ name: 'Sass', img: sass },
		{ name: 'JavaScript', img: js },
		{ name: 'MongoDB', img: mongo },
		{ name: 'Express', img: express },
		{ name: 'Git', img: git },
		'Node'
	]
	const frameworks = [ { name: 'React', img: react }, { name: 'Vue', img: vue } ]
	const edu = [
		{ name: 'Modern HTML & CSS From the beginning', img: traversy },
		{ name: 'Modern JS from the beginning', img: traversy },
		{ name: 'React Front to Back', img: traversy },
		{ name: 'MERN front to back', img: traversy },
		{ name: 'React - The Complete Guide', img: academind },
		{ name: 'Vue.js - The Complete Guide', img: academind },
		{ name: 'Git & GitHub - The Practical Guide', img: academind }
	]
	return (
		<HomeWrapper className=" bg-transparent">
			<Hero />
			<div className="hidden md:block">
				<div id="info" className="bg-white rounded">
					<Section title="skills" items={skills} />
				</div>
				<div id="info" className="bg-white rounded">
					<Section title="frameworks" items={frameworks} />
				</div>
				<div id="info" className="bg-white rounded">
					<Section title="courses" items={edu} />
				</div>
			</div>
		</HomeWrapper>
	)
}

export default Home
