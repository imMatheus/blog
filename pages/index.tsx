import type { NextPage } from 'next'
import path from 'path'
import { GetStaticProps } from 'next'
import matter from 'gray-matter'
import fs from 'fs'
import getConfig from 'next/config'
import ArticlesGrid from '@/components/ArticlesGrid'
import { Article } from '@/types/Article'
import Head from 'next/head'

const { serverRuntimeConfig } = getConfig()

interface Props {
	articles: Article[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const fileNames = fs.readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './articles'), 'utf8')

	const articles: Article[] = fileNames.map((name) => {
		const str = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, `articles/${name}`), 'utf8')
		const { data, content } = matter(str)

		return JSON.parse(JSON.stringify({ ...data, content, fileName: name })) as Article
	})

	return {
		props: {
			articles: articles.filter((f) => f.public === true).sort((a, b) => (a.date < b.date ? 1 : -1))
		}
	}
}

const Home: NextPage<Props> = ({ articles }) => {
	return (
		<main>
			<Head>
				<title>Matus blog</title>
			</Head>
			<ArticlesGrid articles={articles} />
		</main>
	)
}

export default Home
