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
        <CenteredView>
            {/* <div className='max-w-full relative'> */}
            <Image
                alt='react'
                src={reactImg}
                placeholder='blur'
                // objectFit='fill'
                layout='responsive'
            />
            {/* </div> */}
            <h1>To be or not to be</h1>
            <p>
                Lorem ipsum alias sequi consequuntur magnam dignissimos incidunt
                eveniet error beatae impedit, non recusandae voluptatibus enim,
                quam id ad eligendi, eius provident at. Porro animi at
                repellendus architecto quasi ducimus?
            </p>
            <CodeBlock gist='575cc36024e95bae27d49273397dffed' />
            <h2>My title</h2>
            <p>
                Lorem ipsum
                <Italic> hello wolrd </Italic>
                alias sequi consequuntur magnam dignissimos incidunt eveniet
                error beatae impedit, non recusandae voluptatibus enim, quam id
                ad eligendi, eius provident at. Porro animi at distinctio
                voluptatem iste nobis iure magni deleniti ipsum quam voluptatum
                incidunt dignissimos, perspiciatis voluptatum impedit illum
                molestiae asperiores corrupti doloremque nulla distinctio esse
                aut optio corporis! Facilis consequuntur voluptatum ipsa iste
                tempore unde reprehenderit sunt sed soluta ea quaerat odit totam
                iusto delectus, vel tenetur. Architecto ut ratione repellat ab
                facilis cumque provident autem quibusdam? Sed eligendi itaque,
                repellendus architecto quasi ducimus?
            </p>

            <p>
                Lorem ipsum
                <Italic> hello wolrd </Italic>
                alias sequi consequuntur magnam dignissimos incidunt eveniet
                error beatae impedit, non recusandae voluptatibus enim, quam id
                ad eligendi, eius provident at. Porro animi at distinctio
                exercitationem numquam tempora. Adipisci, atque? Saepe hic quasi
                in, ea veniam consequuntur laborum sequi fugit possimus repellat
                incidunt dignissimos, perspiciatis voluptatum impedit illum
                molestiae asperiores corrupti doloremque nulla distinctio esse
                aut optio corporis! Facilis consequuntur voluptatum ipsa iste
                tempore unde reprehenderit sunt sed soluta ea quaerat odit totam
                iusto delectus, vel tenetur. Architecto ut ratione repellat ab
                facilis cumque provident autem quibusdam? Sed eligendi itaque,
                repellendus architecto quasi ducimus?
            </p>
            <p>
                Lorem ipsum
                <Italic> hello wolrd </Italic>
                alias sequi consequuntur magnam dignissimos incidunt eveniet
                error beatae impedit, non recusandae voluptatibus enim, quam id
                ad eligendi, eius provident at.
            </p>
        </CenteredView>
    )
}

export default MyFirstBlogPost
