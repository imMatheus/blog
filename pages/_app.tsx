import '../styles/globals.scss'
import type { AppProps } from 'next/app'
// import 'highlight.js/styles/base16/solarized-dark.css'
import Layout from '@/components/Layout'
import 'highlight.js/styles/github.css'
// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/night-owl.css'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
