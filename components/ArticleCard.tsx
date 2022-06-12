import React from 'react'
import Link from 'next/link'
import { Article } from '@/types/Article'
import TagChip from './TagChip'

interface ArticleCardProps {
	article: Article
	index: number
}

function generateLinkFromTitle(title: string) {
	return title.replace(/\s+/g, '-').split('.mdx')[0].toLowerCase()
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
	return (
		<Link href={`/articles/${generateLinkFromTitle(article.fileName)}`} passHref={true}>
			<a className="flex cursor-pointer gap-3">
				<div className="flex-shrink-0 text-3xl font-bold opacity-30">{index < 10 ? '0' + index : index}</div>
				<div className="space-y-1.5">
					<p className="flex items-center gap-1.5 text-sm text-clr-text-grayed">
						2 june<span className="block h-0.5 w-0.5 flex-shrink-0 rounded-full bg-clr-text-grayed"></span> 18 min read
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
