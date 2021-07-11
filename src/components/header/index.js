import React from 'react'
import Image from 'next/image'
import HeaderBlob from '../../public/headerBlob.svg'
import MeHeader from '../../public/meHeader.svg'
import { Icon } from '@iconify/react'
import sunIcon from '@iconify/icons-bi/sun'
import {
	Container,
	HeaderMain,
	LanguageSelect,
	TopHeader,
} from './header-styled'

const Header = ({ options, languages }) => {
	return (
		<>
			<Container>
				<TopHeader>
					<Icon
						className='themeToggle'
						icon={sunIcon}
						width={40}
						height={40}
						color='#F7D448'
					/>
				</TopHeader>
				<HeaderMain>
					<ul>
						{options.map((option, i) => (
							<li key={i}>
								<a
									href={option.route}
									active={option.active ? 'true' : 'false'}
									className={option.name}
								>
									{option.name}
								</a>
							</li>
						))}
					</ul>
				</HeaderMain>
				<div className='meHeader'>
					<Image
						alt='Christopher'
						src={MeHeader}
						width={421}
						height={421}
					></Image>
				</div>
				<div className='headerBlob'>
					<Image
						alt='A purple blob'
						src={HeaderBlob}
						width={615}
						height={880}
					></Image>
				</div>
			</Container>
		</>
	)
}

export default Header
