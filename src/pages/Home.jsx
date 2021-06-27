import styled from 'styled-components'

const HomeWrapper = styled.div`
	z-index: 1;
	background-color: #90d5ec;
	background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
    height: 100%;
`

const Home = () => {
	return (
		<HomeWrapper className="pt-20 bg-blue-200 p-5 fixed top-0 left-0 w-full">
			
		</HomeWrapper>
	)
}

export default Home
