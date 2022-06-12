import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'
import hljs from 'highlight.js'
import getConfig from 'next/config'
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

export const getStaticProps: GetStaticProps = async (context) => {
	const str = fs.readFileSync(
		path.join(serverRuntimeConfig.PROJECT_ROOT, `articles/${context.params?.articleId}.mdx`),
		'utf8'
	)
	const { content, data } = matter(str)

	return {
		props: {
			markdown: content
		}
	}
}

interface Props {
	markdown: string
}

const Article: NextPage<Props> = ({ markdown }) => {
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
