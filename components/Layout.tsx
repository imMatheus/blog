import React from 'react'
import Navbar from './Navbar'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="px-4">
			<div className="mx-auto max-w-6xl">
				<Navbar />
				<div className="py-14">{children}</div>
			</div>
		</div>
	)
}

export default Layout
