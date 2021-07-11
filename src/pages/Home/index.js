import Header from '../../components/header'
import Image from 'next/image'
import MiddleBlob from '../../public/middleBlob.svg'
import MeMiddle from '../../public/meMiddle.svg'
import { Button, MiddleContainer, TopContainer } from './home-template'

const options = [
	{ name: 'home', route: '/', active: true },
	{ name: 'blog', route: '/blog', active: false },
	{ name: 'me', route: '/about', active: false },
	{ name: 'contact', route: '/contact', active: false },
]

const langs = [
	{ value: 'en-US', label: 'en-us' },
	{ value: 'pt-BR', label: 'pt-br' },
]

export default function Home() {
	return (
		<div>
			<main>
				<Header options={options} languages={langs} />
				<TopContainer>
					<h1>
						Hi<span>,</span> I'm Christopher<span>.</span>
					</h1>
					<h2>Front End Software Engineer</h2>
					<Button>Get in Touch</Button>
				</TopContainer>
				<MiddleContainer>
					<div className='middleBlob'>
						<Image
							src={MiddleBlob}
							alt='A middle purple blob'
							width={453}
							height={425}
						/>
					</div>
					<div className='meMiddle'>
						<Image
							src={MeMiddle}
							alt='Christopher, Front End Engineer '
							width={456}
							height={456}
						/>
					</div>
				</MiddleContainer>
			</main>
		</div>
	)
}
