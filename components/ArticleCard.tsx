import React from 'react'
import Link from 'next/link'
import { Article } from '@/types/Article'
import TagChip from './TagChip'
import dateFormat from 'dateformat'

interface ArticleCardProps {
	article: Article
	index: number
}

function generateLinkFromTitle(title: string) {
	return title.replace(/\s+/g, '-').split('.mdx')[0].toLowerCase()
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
	console.log('hello vercel')
	console.log(article.content)

	const stripedText = article.content?.replaceAll(/\r?\n|\r/g, ' ') // removes all \t and \n from the text
	const stripedTextLength = stripedText.length // gets length of the striped text
	const matches = stripedText.match(/```(.*?)```/g) // finds all code snippets, all text surrounded by 2 ```
	const matchesLength = matches?.reduce((sum, match) => sum + match.length, 0) || 0 // get the length of the code snippets
	const timeToRead = Math.ceil((stripedTextLength - matchesLength * 0.5) / 500)

	return (
		<Link href={`/articles/${generateLinkFromTitle(article.fileName)}`} passHref={true}>
			<a className="flex cursor-pointer gap-3">
				<div className="flex-shrink-0 text-3xl font-bold opacity-30">{index < 10 ? '0' + index : index}</div>
				<div className="space-y-1.5">
					<p className="flex items-center gap-1.5 text-sm text-clr-text-grayed">
						{dateFormat(article.date, 'mmmm dS, yyyy')}
						<span className="block h-0.5 w-0.5 flex-shrink-0 rounded-full bg-clr-text-grayed"></span> {timeToRead} min read
					</p>
					<p className="text-base font-bold">{article.title}</p>
					<div className="flex flex-wrap gap-1">
						{article.tags.map((tag) => (
							<TagChip tag={tag} key={article.title + '-' + tag} />
						))}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ArticleCard
