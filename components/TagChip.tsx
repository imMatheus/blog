import React from 'react'
import styles from './TagChip.module.scss'

interface TagChipProps {
	tag: string
}

const TagChip: React.FC<TagChipProps> = ({ tag }) => {
	return <div className={styles['chip'] + ' ' + styles[tag]}>{tag}</div>
}

export default TagChip
