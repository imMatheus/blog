import React from 'react'
import Link from 'next/link'

interface NavbarChipProps {
	children: React.ReactNode
	href: string
}

const NavbarChip: React.FC<NavbarChipProps> = ({ children, href }) => {
	return (
		<Link href={href}>
			<a className="block rounded-md bg-transparent py-1 px-2 hover:bg-clr-bg-grayed-dark">{children}</a>
		</Link>
	)
}

const Navbar: React.FC = ({}) => {
	return (
		<nav className="py-2">
			<div className="flex items-center justify-between">
				<Link href="/" passHref>
					<a>
						<h2 className="text-3xl font-bold">Matus blog</h2>
					</a>
				</Link>
				<div className="flex gap-1">
					<NavbarChip href="/">Home</NavbarChip>
					<NavbarChip href="https://portfolio-immatheus.vercel.app/">Portfolio</NavbarChip>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
