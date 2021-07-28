import styled from 'styled-components'
import Section from './Section'
import html from '../../../../assets/html.png'
import css from '../../../../assets/css.png'
import sass from '../../../../assets/sass.png'
import js from '../../../../assets/javascript.png'
import git from '../../../../assets/git.png'
import node from '../../../../assets/nodejs.png'
import react from '../../../../assets/react.png'
import vue from '../../../../assets/vue.png'
import academind from '../../../../assets/academind.png'
import traversy from '../../../../assets/traversy.png'
import mongo from '../../../../assets/mongo.png'
import express from '../../../../assets/express.png'

const StyledMenu = styled.div`
	position: absolute;
	top: 90px;
	left: 20px;
	right: 20px;
	background: #fff;
	z-index: 2000;
	color: #333;
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	opacity: ${({ open }) => (open ? '1' : '0')};
	transition: 0.3s ease-in;
	h4 {
		font-size: 13px;
		color: rgb(136, 152, 170);
	}
	h3 {
		font-size: 14px;
		color: rgb(10, 37, 64);
	}
	& > div:not(:last-child) {
		border-bottom: 1px dashed #eaeaee;
	}
	#section img {
		max-width: 24px;
		max-height: 24px;
		object-fit: contain;
	}
`

const Menu = ({ open }) => {
	const skills = [
		{ name: 'HTML', img: html },
		{ name: 'CSS', img: css },
		{ name: 'Sass', img: sass },
		{ name: 'JavaScript', img: js },
		{ name: 'MongoDB', img: mongo },
		{ name: 'Express', img: express },
		{ name: 'Git', img: git },
		{ name: 'Node', img: node }
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
		<StyledMenu open={open} className="rounded-lg shadow-xl">
			<Section title="skills" items={skills} />
			<Section title="frameworks" items={frameworks} />
			<Section title="courses" items={edu} />
		</StyledMenu>
	)
}

export default Menu
