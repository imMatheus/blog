import type { NextPage } from 'next'
import path from 'path'
import { GetStaticProps } from 'next'
import fs from 'fs'
import Link from 'next/link'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()
interface Props {
    files: Array<{ articleId: string }>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const files = fs.readdirSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './articles'))

    return {
        props: {
            files: files?.map((file) => ({
                articleId: file,
            })),
        },
    }
}

const Home: NextPage<Props> = ({ files }) => {
    return (
        <main className='bg-slate-50 dark:bg-slate-900 min-h-screen'>
            <article className='py-24 sm:py-40 max-w-5xl mx-auto'>
                <div
                    className='mt-16 px-6 mx-auto prose prose-slate dark:prose-invert
                     prose-pre:bg-[#011627] lg:prose-xl xl:prose-xl sm:prose-sm md:prose-md
                    prose-code:text-teal-600 dark:prose-code:text-teal-500 prose-code:bg-teal-100/50 dark:prose-code:bg-teal-800/10
                      prose-headings:text-blue-800 dark:prose-headings:text-blue-600
                     '
                >
                    <h1>Matu&apos;s blog</h1>
                    <h2>All articles</h2>
                    {files?.map(({ articleId }) => {
                        return (
                            <Link href={`/articles/${articleId}`} passHref={true} key={articleId}>
                                <div className='cursor-pointer py-2 pl-3 mb-4 border-l-2 border-l-teal-300 bg-teal-700/10'>
                                    <h3 className='!m-0'>
                                        {(articleId.charAt(0)?.toUpperCase() + articleId.slice(1))
                                            ?.replace('.md', '')
                                            ?.replaceAll('-', ' ')}
                                    </h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </article>
        </main>
    )
}

export default Home
