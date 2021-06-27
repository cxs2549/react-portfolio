import styled from 'styled-components'

const Wrapper = styled.div`
	#item {
		display: grid;
		grid-template-columns: 24px auto;
		align-items: center;
		gap: .5rem;
	}
`

const Section = ({ title, items }) => {
	return (
		<Wrapper id="section" className="py-6 px-5">
			<h4 className="font-bold uppercase">{title}</h4>
			<div className="mt-5 grid grid-cols-2 gap-4">
				{items.map((item) => (
					<div id="item">
						<div className="w-8 h-8 flex items-center justify-center">
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
