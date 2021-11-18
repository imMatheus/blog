import React from 'react'
import styles from 'styles/Components.module.scss'

const CenteredView: React.FC = ({ children }) => {
    return <div className={styles.centeredView}>{children}</div>
}

export default CenteredView
