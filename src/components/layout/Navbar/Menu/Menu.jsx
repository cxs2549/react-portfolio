import styled from 'styled-components'
import Section from './Section'
import html from '../../../../assets/html.png'
import css from '../../../../assets/css.png'
import sass from '../../../../assets/sass.png'
import js from '../../../../assets/javascript.png'
import git from '../../../../assets/git.png'
import react from '../../../../assets/react.png'
import vue from '../../../../assets/vue.png'
import academind from '../../../../assets/academind.png'
import traversy from '../../../../assets/traversy.png'


const StyledMenu = styled.div`
	position: fixed;
	top: 86px;
	left: 16px;
	right: 16px;
	background: #fff;
	z-index: 2;
	color: #333;
	transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0)')};
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	transition: 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	h4 {
		font-size: 13px;
		color: rgb(136, 152, 170);
	}
	h3 {
		font-size: 14px;
		color: rgb(10, 37, 64);
	}
	& > div:not(:last-child) {
		border-bottom: 1px dashed #EAEAEE;
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
		{ name: 'Git', img: git },
		'Node'
	]
	const frameworks = [ { name: 'React (3 yrs)', img: react }, { name: 'Vue (2 yrs)', img: vue } ]
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
		<StyledMenu open={open} className="rounded-lg">
			<Section title="skills" items={skills} />
			<Section title="frameworks" items={frameworks} />
			<Section title="courses" items={edu} />
		</StyledMenu>
	)
}

export default Menu
