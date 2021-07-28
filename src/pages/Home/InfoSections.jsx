import styled from 'styled-components'
import Section from './Section'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import js from '../../assets/javascript.png'
import mongo from '../../assets/mongo.png'
import express from '../../assets/express.png'
import git from '../../assets/git.png'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'
import traversy from '../../assets/traversy.png'
import academind from '../../assets/academind.png'

const StyledWrapper = styled.div`
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

const InfoSections = () => {
	const skills = [
		{ name: 'HTML', img: html },
		{ name: 'CSS', img: css },
		{ name: 'Sass', img: sass },
		{ name: 'JavaScript', img: js },
		{ name: 'MongoDB', img: mongo },
		{ name: 'Express', img: express },
		{ name: 'Git', img: git },
		{name: 'Node', img: node}
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
		<StyledWrapper className="hidden md:block">
			<div id="info" className=" rounded">
				<Section title="skills" items={skills} />
			</div>
			<div id="info" className=" rounded">
				<Section title="frameworks" items={frameworks} />
			</div>
			<div id="info" className=" rounded">
				<Section title="courses" items={edu} />
			</div>
		</StyledWrapper>
	)
}

export default InfoSections
