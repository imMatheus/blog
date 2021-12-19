import React from 'react'

interface CodeBlockProps {
    text: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ text }) => {
    console.log(text)
    const regex = /(for|ff)/gi
    text.replaceAll(regex, (a) => {
        return `<span class="bg-red-600">${a}</span>`
    })

    console.log(text)

    return (
        <code className='bg-blue-700'>
            <pre
                dangerouslySetInnerHTML={{ __html: text }}
                className='via-yellow-200'
            ></pre>
        </code>
    )
}

export default CodeBlock
