import React from 'react'
import ArticleCard from './ArticleCard'
import { Article } from '@/types/Article'

interface ArticlesGridProps {
	articles: Article[]
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
	return (
		<div className="grid gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{articles?.map((article, i) => (
				<ArticleCard article={article} index={i + 1} key={article.title + '-' + article.title} />
			))}
		</div>
	)
}

export default ArticlesGrid
