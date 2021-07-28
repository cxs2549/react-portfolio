import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledSlideshow = styled.div`
	background: transparent;
	height: 270px;
	position: relative;
	z-index: 0;
	@media screen and (min-width: 768px) {
		height: 320px;
	}
	@media screen and (min-width: 1280px) {
		height: 360px;
	}

	.slideshow {
		margin: 0 auto;
		overflow: hidden;
		height: 270px;
		@media screen and (min-width: 768px) {
			height: 320px;
		}
		@media screen and (min-width: 1280px) {
			height: 360px;
		}
		position: relative;
		z-index: -100;
		background-color: transparent;
	}

	.slideshowSlider {
		white-space: nowrap;
		transition: ease 900ms;
		background: none;
		position: relative;
		z-index: -100;
	}

	.slide {
		width: 100%;
		display: inline-block;
		height: 220px;

		@media screen and (min-width: 768px) {
			height: 270px;
		}
		@media screen and (min-width: 1280px) {
			height: 324px;
		}

		width: 100%;
		background-size: cover;
		background-position: top;
		overflow: hidden;
		position: relative;
		z-index: -100;
	}

	/* Buttons */

	.slideshowDots {
		text-align: center;
		position: absolute;
		bottom: 12px;
		left: 50%;
		transform: translateX(-50%);
		@media screen and (min-width: 1280px) {
			bottom: 0px;
		}
	}

	.slideshowDot {
		display: inline-block;
		height: 14px;
		width: 14px;
		border-radius: 50%;
		cursor: pointer;
		margin: 15px 7px 0px;
		background-color: #fff;
		opacity: .75;
	}

	.slideshowDot.active {
		background-color: #ec4655;
		opacity: 1;
	}
`

const colors = [ '#0088FE', '#00C49F', '#FFBB28', '#ffffff' ]
const delay = 4000

const Slideshow = ({ slides }) => {
	const [ index, setIndex ] = useState(0)
	const timeoutRef = useRef(null)

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	useEffect(
		() => {
			resetTimeout()
			timeoutRef.current = setTimeout(
				() =>
					setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
				delay
			)

			return () => {
				resetTimeout()
			}
		},
		[ index ]
	)

	return (
		<StyledSlideshow className="rounded-lg">
			<div className="slideshow rounded-lg ">
				<div
					className="slideshowSlider rounded-lg"
					style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
				>
					{slides.map((slide, index) => (
						<a
							href={slide.link}
							target="_blank"
							rel="noreferrer"
							key={index}
							className="rounded-lg"
						>
							<div
								className="slide rounded-lg"
								style={{ backgroundImage: `url(${slide.image})` }}
							>
								<div className="absolute bottom-2 right-2 bg-gray-100 bg-opacity-80 rounded-full  px-2 py-1 shadow whitespace-nowrap flex items-center space-x-1">
									<img src={slide.framework} className="w-8" alt="" />
									<a href={slide.github} target="_blank" rel="noreferrer">
										<div className="text-xl opacity-70">
											<i class="fa fa-github" aria-hidden="true" />
										</div>
									</a>
								</div>
							</div>
						</a>
					))}
				</div>

				<div className="slideshowDots">
					{colors.map((_, idx) => (
						<div
							key={idx}
							className={`slideshowDot${index === idx ? ' active' : ''}`}
							onClick={() => {
								setIndex(idx)
							}}
						/>
					))}
				</div>
			</div>
		</StyledSlideshow>
	)
}

export default Slideshow
