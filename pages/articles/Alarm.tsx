import React from 'react'
import type { NextPage } from 'next'
import { Plus } from 'react-feather'

const Alarm: NextPage = () => {
    const consts = /(const|let|var|for|import|from)/gi
    const strings = /('*[a-zA-Z]*'|"*[a-zA-Z]")/gi
    const numbers = /\d+/g
    const str = `
    for (let i = 0; i < 10; i++) {\n
    import ABC from 'hej'    console.log('hej')\n
    }
    `
        .replaceAll(numbers, (a) => {
            return `<span class="text-green-400">${a}</span>`
        })
        .replaceAll(strings, (a) => {
            return `<span class="text-blue-600">${a}</span>`
        })
        .replaceAll(consts, (a) => {
            return `<span class="text-red-600">${a}</span>`
        })

    console.log(str)
    return (
        <div className='h-screen w-screen flex justify-center items-center font-sans'>
            <div className='relative h-[712px] w-[350px] bg-black rounded-[60px]'>
                <div className='w-40 h-6 bg-black rounded-b-3xl mx-auto border border-gray-800/50'></div>
                <div className='px-8 py-3 flex justify-between text-[#c49016]'>
                    <p>Ändra</p>
                    <Plus />
                </div>
            </div>
        </div>
    )
}

export default Alarm
