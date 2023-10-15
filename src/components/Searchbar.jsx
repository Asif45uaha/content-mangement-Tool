import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const Searchbar = () => {



    return (
        <form>
            <div className='flex flex-col items-center  gap-2 shadow-md p-4'>
                <div className='text-2xl font-medium'>Search the Blog</div>
                <div className='flex flex-row items-center'>
                    <input type="text" placeholder='Search' className='relative outline-0 border border-b-2 border-red-700 py-3 px-4' />
                    <AiOutlineSearch size={25} className='absolute right-[60px]' />
                </div>
            </div>
        </form>
    )
}
export default Searchbar