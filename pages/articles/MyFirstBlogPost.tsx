import React from 'react'
import type { NextPage } from 'next'
import CenteredView from '@/components/CenteredView'
import Italic from '@/components/Italic'
import CodeBlock from '@/components/Code'
import Image from 'next/image'
import styles from 'styles/Components.module.scss'
import reactImg from 'public/react.png'

const MyFirstBlogPost: NextPage = () => {
    return (
        <main className='bg-gray-600 dark:bg-gray-900'>
            <article className='py-40 max-w-5xl mx-auto'>
                <h1 className='tex-6xl font-bold text-center text-gray-900 dark:text-gray-100'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className='mt-16 mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eaque, quaerat?
                </div>
            </article>
        </main>
    )
}

export default MyFirstBlogPost
