import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import MenuButton from './Menu/MenuButton'


const StyledNav = styled.header`
	position: relative;
	z-index: 10;
	nav {
		padding: 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		background: transparent;
        color: white;
		@media screen and (min-width: 768px) {
			padding: 1rem 24px;
		}
		@media screen and (min-width: 1280px) {
			padding: 1rem 32px;
		}
		#left,
		#right {
			display: flex;
			align-content: center;
		}
		#left {
			#logo {
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				@media screen and (min-width: 768px) {
					transform: translate(0);
				}
			}
			@media screen and (min-width: 768px) {
				gap: 1.5rem;
			}
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
			<nav>
				<div id="left">
					<div>
						<Link to="/" className="font-extrabold text-xl">
							SuperVision Design
						</Link>
					</div>
					<div className="hidden md:flex items-center  text-sm relative">
						<input
							type="search"
							placeholder="Search or jump to..."
							className="border rounded px-3 focus:outline-none"
							style={{ height: '28px', width: '260px' }}
						/>
						<div className="absolute right-3 opacity-70 text-gray-800">
							<i className="fa fa-search" aria-hidden="true" />
						</div>
					</div>
					<div className="hidden md:flex whitespace-nowrap gap-4 items-center capitalize text-sm font-medium text-gray-500">
						{links.map((link) => (
							<NavLink
								exact
								to={link.to}
								activeClassName="text-gray-900"
								className="hover:text-gray-600"
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>

				<div id="right">
					<div className="md:hidden">
						<MenuButton links={links} />
					</div>

					
				</div>
			</nav>
		</StyledNav>
	)
}

export default Navbar
