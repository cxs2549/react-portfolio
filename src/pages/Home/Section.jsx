import styled from 'styled-components'

const Wrapper = styled.div`
	h4 {
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
	}
`

const Section = ({ title, items }) => {
	return (
		<Wrapper id="section" className="">
			<h4 className="font-bold uppercase text-4xl text-white">{title}</h4>
			<div className=" py-4  rounded mt-5 grid grid-cols-4 md:gap-8">
				{items.map((item) => (
					<div id="item" className="bg-white flex flex-col items-center justify-center border  py-5 px-4 rounded-md shadow" >
						<div className="w-8 h-8 md:h-12 md:w-16 flex items-center justify-center">
							<img src={item.img} alt="" className="" />
						</div>
						<h3 className="font-bold capitalize text-lg leading-5 text-center mt-5">{item.name}</h3>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

export default Section
