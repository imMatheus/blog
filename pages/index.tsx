import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import { marked } from 'marked'

const Home: NextPage = () => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (divRef.current) {
            // divRef.current.innerHTML  = 'hej'
            divRef.current.innerHTML = marked.parse(
                '# Marked in browser\n\nRendered by **marked**.'
            )
        }
    }, [])

    return (
        <main className='bg-gray-50'>
            <article className='py-40 max-w-5xl mx-auto prose lg:prose-xl'>
                <h1 className='tex-6xl font-bold pb-8 text-center text-gray-900'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className='mt-16 mx-auto' ref={divRef}></div>
            </article>
        </main>
    )
}

export default Home
