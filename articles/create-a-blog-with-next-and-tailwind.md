# Create a blog with next.js and tailwind

I recently created this website as place to share intresseting stuff i find in the realm of programing. I thought it would be good to share how I created this blog if anyone was intresseting in doing something similarly.

_Lets start by creating a new **next** project:_

```bash
npx create-next-app@latest
# or
yarn create next-app
```

_Add **tailwind** to the project:_

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

_In your `styles/global.css` make sure to add the following lines:_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_Install `@tailwind/typography`_

```bash
npm i @tailwind/typography
```

_Now in the `tailwind.config.js` file add the the `@tailwind/typography` to the **plugins** array_

```js
module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },[s&s]
    plugins: [require('@tailwindcss/typography')],
}

```

_Lets add some articles! In the root of your project create a new folder called `articles` and inside it create a new file called `first-blog-post.md`. All of your articles are going to be *markdown* files. So lets add some markdown to this article:_

````markdown
# My first ever blog post

This is just some dummy text.

Here is some _javascript_ `code`:

```js
const x = 10
console.log('hello world')
```
````

_Now lets work on showing our articles to the user. First we'll need add *two* packages. `marked` for turning our *.md* files into html elements and `highlight.js` for highlighting code blocks:_

```bash
npm i marked highlight.js
# or
yarn add marked highlight.js
```

_To change the color your code-blocks have add the following line to the `pages/_app.js` file:_

```js
import '../styles/globals.css'
[s&s]import 'highlight.js/styles/night-owl.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp

```

_Lets start writing some *react* code. In the `pages` directory, create a new folder called `articles` and create a new file inside that folder called `[articleId].jsx`. In that file add the following code:_

```js
import React, { useEffect, useRef } from 'react'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import hljs from 'highlight.js'

// generating all the paths
export const getStaticPaths = async () => {
    // read all files in the articles folder
    const files = fs.readdirSync(path.join(process.cwd(), './articles'))

    return {
        paths: files.map((file) => ({
            params: {
                // if you changed the name of this to something other then [articleId].js
                articleId: file.toLowerCase().trim().replace(' ', '-'),
            },
        })),
        // all other paths will return a 404 error
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    // read the given file
    const markdown = fs.readFileSync(
        path.join(process.cwd(), `articles/${context.params?.articleId}`),
        'utf8'
    )

    return {
        // return the given file in the props pargument
        props: {
            markdown,
        },
    }
}

const Article = ({ markdown }) => {
    const divRef = useRef(null)

    useEffect(() => {
        if (divRef.current) {
            // default settings for the the marked renderer
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function (code, lang) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                    return hljs.highlight(code, { language }).value
                },
                langPrefix: 'hljs language-',
                pedantic: false,
                gfm: true,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false,
            })

            // need to set the innerHTML as just setting it in the div, e.g (<div>{marked.parse(markdown)}</div>)
            // will result as just plain text
            divRef.current.innerHTML = marked.parse(markdown)
        }
    }, [markdown])

    return (
        <main className='bg-slate-50 dark:bg-slate-900 '>
            <article className='py-40 max-w-5xl mx-auto'>
                {/* 
                here is were the real magic happens,
                the 'prose' class is what takes care of all the styling needed.
                It's highly customisable as you can see by all the classes
                */}
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
```

## Wuala! Just like, that you just create your first blog

Run it in the browser:

```bash
npm run dev
# or
yarn dev
```
