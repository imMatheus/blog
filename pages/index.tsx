import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <p className='bg-green-600'>hello world!</p>
            <h1>abc</h1>
            <h2>abc</h2>
            <h3>abc</h3>
        </div>
    )
}

export default Home
