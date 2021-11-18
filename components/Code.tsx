import React from 'react'
import Gist from 'react-gist'
import styles from 'styles/Components.module.scss'

interface Props {
    gist: string
}

const Code: React.FC<Props> = ({ gist }) => {
    return (
        <div className={styles.code}>
            <Gist id={gist} />
        </div>
    )
}

export default Code
