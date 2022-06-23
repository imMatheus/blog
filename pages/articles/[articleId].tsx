import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import getConfig from 'next/config'
import Head from 'next/head'
const { serverRuntimeConfig } = getConfig()

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './articles'))

	return {
		paths: files?.map((file) => ({
			params: {
				articleId: file.split('.mdx')[0]
			}
		})),
		fallback: false
	}
}

interface Props {
	title: string
	markdown: string
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const str = fs.readFileSync(
		path.join(serverRuntimeConfig.PROJECT_ROOT, `articles/${context.params?.articleId}.mdx`),
		'utf8'
	)
	const { content, data } = matter(str)

	return {
		props: {
			title: data.title,
			markdown: content
		}
	}
}

const Article: NextPage<Props> = ({ markdown, title }) => {
	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (divRef.current) {
			marked.setOptions({
				renderer: new marked.Renderer(),
				highlight: function (code, lang) {
					const language = hljs.getLanguage(lang) ? lang : 'plaintext'
					return hljs.highlight(code, { language }).value
				},
				langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
				pedantic: false,
				gfm: true,
				breaks: false,
				sanitize: false,
				smartLists: true,
				smartypants: false,
				xhtml: false
			})

			divRef.current.innerHTML = marked.parse(markdown)
		}
	}, [markdown])

	return (
		<main>
			<Head>
				<title>{title} | Matus blog</title>
			</Head>
			<article>
				<div
					className="prose prose-pre:border prose-pre:border-clr-border prose-pre:bg-[#fff] lg:prose-xl xl:prose-xl"
					ref={divRef}
				></div>
			</article>
		</main>
	)
}

export default Article
