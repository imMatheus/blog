module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'clr-bg': 'var(--clr-bg)',
				'clr-bg-grayed': 'var(--clr-bg-grayed)',
				'clr-bg-grayed-dark': 'var(--clr-bg-grayed-dark)',
				'clr-text': 'var(--clr-text)',
				'clr-text-grayed': 'var(--clr-text-grayed)',
				'clr-border': 'var(--clr-border)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
}
