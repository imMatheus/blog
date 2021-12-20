import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import hljs from 'highlight.js'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
import Head from 'next/Head'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './articles'))

    return {
        paths: files?.map((file) => ({
            params: {
                articleId: file,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const markdown = fs.readFileSync(
        path.join(serverRuntimeConfig.PROJECT_ROOT, `articles/${context.params?.articleId}`),
        'utf8'
    )

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
    const router = useRouter()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (divRef.current) {
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function (code, lang) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                    return hljs.highlight(code, { language }).value
                },
                langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
                pedantic: false,
                gfm: true,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false,
            })

            divRef.current.innerHTML = marked
                .parse(markdown)
                .trim()
                .replaceAll('[s&amp;s]', '<div class="highlighted"> </div>')
        }
    }, [markdown])

    const id = Array.isArray(router.query.articleId)
        ? router.query.articleId[0]
        : router.query.articleId

    return (
        <main className='bg-slate-50 dark:bg-slate-900 '>
            <Head>
                <title>
                    {id
                        ? (id?.charAt(0).toUpperCase() + id?.slice(1))
                              ?.replace('.md', '')
                              ?.replaceAll('-', ' ')
                        : ''}{' '}
                    | Matu&apos;s blog
                </title>
            </Head>
            <article className='py-24 sm:py-40 max-w-5xl mx-auto'>
                <div
                    className='mt-16 px-6 mx-auto prose prose-slate dark:prose-invert
                     prose-pre:bg-[#011627] lg:prose-xl xl:prose-xl sm:prose-sm md:prose-md
                    prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-code:bg-teal-100/50 dark:prose-code:bg-teal-800/10
                      prose-headings:text-blue-800 dark:prose-headings:text-blue-600
                     '
                    ref={divRef}
                ></div>
            </article>
        </main>
    )
}

export default Article
