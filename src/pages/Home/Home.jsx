import styled from 'styled-components'

import Hero from './Hero'
import InfoSections from './InfoSections'

const HomeWrapper = styled.div`
	/* overflow-y: auto; */
	/* z-index: -100; */
	margin-top: 6%;
	@media screen and (min-width: 768px) {
		margin-top: 4%;
	}
	@media screen and (min-width: 1280px) {
		margin-top: 3%;
	}
`

const Home = () => {
	return (
		<HomeWrapper className="bg-transparent">
			<Hero />
			<InfoSections />
		</HomeWrapper>
	)
}

export default Home
