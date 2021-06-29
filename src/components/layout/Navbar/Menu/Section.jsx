import styled from 'styled-components'

const Wrapper = styled.div`
	#item {
		display: grid;
		grid-template-columns: 24px auto;
		align-items: center;
		gap: .65rem;
		@media screen and (min-width: 768px) {
			gap: 2rem;
		}
	}
`

const Section = ({ title, items }) => {
	return (
		<Wrapper id="section" className="py-4 px-4">
			<h4 className="font-bold uppercase">{title}</h4>
			<div className="mt-5 grid grid-cols-2 gap-2 md:gap-8 md:grid-cols-3">
				{items.map((item) => (
					<div id="item">
						<div className="w-8 h-8 md:h-12 md:w-12 flex items-center justify-center">
							<img src={item.img} alt="" className="" />
						</div>
						<h3 className="font-bold capitalize leading-4">{item.name}</h3>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

export default Section
