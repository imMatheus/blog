import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), './articles'))
    console.log('files: ', files)

    return {
        paths: files.map((dd) => ({
            params: {
                articleId: dd.toLowerCase().trim().replace(' ', '-'),
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log('id: ', context.params?.articleId)
    const markdown = fs.readFileSync(
        path.join(process.cwd(), `articles/${context.params?.articleId}`),
        'utf8'
    )

    console.log('markdown: ', markdown)

    return {
        props: {
            markdown,
        },
    }
}

interface Props {
    markdown: string
}

const Article: NextPage<Props> = ({ markdown }) => {
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (divRef.current) {
            // divRef.current.innerHTML  = 'hej'
            divRef.current.innerHTML = marked.parse(markdown)
        }
    }, [markdown])

    return (
        <main className='bg-slate-50 dark:bg-slate-900'>
            <article
                className='py-40 max-w-5xl mx-auto prose lg:prose-xl sm:prose-sm md:prose-md prose-slate dark:prose-invert'
                ref={divRef}
            ></article>
        </main>
    )
}

export default Article
