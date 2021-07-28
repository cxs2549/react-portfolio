import styled from 'styled-components'
import wb from '../../assets/sites/wb.png'
import uber from '../../assets/sites/uber.png'
import postmates from '../../assets/sites/postmates.png'
import slack from '../../assets/sites/slack.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'
import sass from '../../assets/sass.png'
import tailwind from '../../assets/tailwind.png'
import Slideshow from '../../components/ui/Slideshow'
const HeroWrapper = styled.div`
	z-index: 1;
	position: relative;
	margin: 0 auto;
	h1 {
		text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
	}
	p {
		color: #fff;
		text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
	}
	@media screen and (min-width: 768px) {
		padding: 0 48px;
		max-width: 1080px;
	}
	@media screen and (min-width: 1280px) {
		padding: 0;
	}
`

const Hero = () => {
	const slides = [
		{
			name: 'WarnerBros',
			image: wb,
			framework: react,
			link: 'https://cxs2549.github.io/react-wb/',
			github: 'https://github.com/cxs2549/react-wb'
		},
		{ name: 'UberEats', image: uber, framework: vue, link: 'https://vueber.netlify.app/' },
		{
			name: 'Postmates',
			image: postmates,
			framework: vue,
			link: 'https://vue-postmates.netlify.app/'
		},
		{ name: 'Slack', image: slack, framework: vue, link: 'https://vue-slack.netlify.app/' }
	]
	const stack = [ react, vue, tailwind, sass ]
	return (
		<HeroWrapper>
			<div className="md:flex md:items-center md:justify-center">
				<div className="grid md:grid-cols-2 xl:gap-20  md:items-center w-full">
					<div className="px-5 md:px-0 md:mt-0 order-2 md:order-1">
						<div class="space-y-4 w-full mt-4">
							<h1 class="text-center md:text-left text-3xl md:text-5xl xl:text-6xl font-extrabold   text-white xl:whitespace-nowrap">
								Conscious, friendly <br className="" /> web{' '}
								<br className="hidden xl:block" /> design
							</h1>
							<p class="text-center md:text-left  px-4 md:px-0 font-medium md:text-lg xl:text-xl pb-4">
								Building pleasant interfaces with the following  technologies:
							</p>
							<div class="flex items-center justify-between w-full  md:space-x-5 md:justify-start xl:max-w-full ">
								{stack.map((item, i) => (
									<div
										key={i}
										className="bg-white rounded-full w-20 flex items-center justify-center py-1 shadow"
									>
										<img src={item} alt="" className="w-10 xl:w-12" />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="rounded-lg z-20 mx-5 md:mx-0 order-1 md:order-2">
						<Slideshow slides={slides} />
					</div>
				</div>
			</div>
		</HeroWrapper>
	)
}

export default Hero
