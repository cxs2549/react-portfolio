import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './Menu/MenuButton'

const StyledNav = styled.header`
	width: 100%;
	z-index: 10;
	nav {
		padding: 32px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		background: transparent;
		color: white;
		@media screen and (min-width: 768px) {
			padding: 32px 48px;
		}
		@media screen and (min-width: 1280px) {
			padding: 32px 0;
			max-width: 1080px;
		}
		#brand {
			text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
			font-weight: 900;
		}
		#left,
		#right {
			display: flex;
			align-content: center;
		}
	}
`

const Navbar = () => {
	const links = [
		{ name: 'projects', to: '/projects' },
		{ name: 'about us', to: '/about-us' },
		{ name: 'contact us', to: '/contact-us' },
		{ name: 'services', to: '/services' }
	]

	return (
		<StyledNav>
			<nav className="xl:mx-auto">
				<div id="left">
					<div>
						<Link to="/" id="brand" className="font-extrabold text-xl md:text-2xl">
							SuperVision Design
						</Link>
					</div>
				</div>

				<div id="right">
					<div className="md:hidden">
						<MenuButton links={links} />
					</div>
					<div className="text-2xl hidden md:flex items-center space-x-6">
						<a href="https://github.com/cxs2549" target="_blank" rel="noreferrer">
							<i class="fa fa-github" aria-hidden="true" />
						</a>
						<a
							href="https://www.linkedin.com/in/cliff-sanchez-b75a201bb/"
							target="_blank"
							rel="noreferrer"
						>
							<i class="fa fa-linkedin" aria-hidden="true" />
						</a>
					</div>
				</div>
			</nav>
		</StyledNav>
	)
}

export default Navbar
