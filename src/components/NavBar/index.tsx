import { useState } from 'react'
import {
    IoTrophyOutline,
    IoTrophy,
    IoHomeOutline,
    IoHome,
    IoSearchOutline,
    IoSearch,
    IoPersonCircle,
    IoPersonCircleOutline
} from 'react-icons/io5'

export function NavBar() {
    const [activeTab, setActiveTab] = useState('')
    
    function updateActiveTab (name:string){
        setActiveTab(name)
        console.log(activeTab)
    }

    if(activeTab==='home'){
        return(
            <span className=' flex items-center justify-around fixed z-50 bg-button w-screen bottom-0 h-[60px]'>
            <button type='button'   onClick={()=>updateActiveTab('home')} className='hover:opacity-70'>
                <IoHome size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('ranking')}  className='hover:opacity-100 opacity-70' >
                <IoTrophyOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('search')} className='hover:opacity-100 opacity-70' >
                <IoSearchOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('account')} className='hover:opacity-100 opacity-70' >
                <IoPersonCircleOutline size={30} color='white' />
            </button>
        </span>
        )
    }
    if(activeTab==='ranking'){
        return(
            <span className=' flex items-center justify-around fixed z-50 bg-button w-screen bottom-0 h-[60px]'>
            <button type='button'   onClick={()=>updateActiveTab('home')} className='hover:opacity-100 opacity-70 '>
                <IoHomeOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('ranking')}  className='hover:opacity-70 ' >
                <IoTrophy size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('search')} className='hover:opacity-100 opacity-70' >
                <IoSearchOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('account')} className='hover:opacity-100 opacity-70' >
                <IoPersonCircleOutline size={30} color='white' />
            </button>
        </span>
        )
    }
    if(activeTab==='search'){
        return(
            <span className=' flex items-center justify-around fixed z-50 bg-button w-screen bottom-0 h-[60px]'>
            <button type='button'   onClick={()=>updateActiveTab('home')} className='hover:opacity-100 opacity-70 '>
                <IoHomeOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('ranking')}  className='hover:opacity-100 opacity-70 ' >
                <IoTrophyOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('search')} className='hover:opacity-70 ' >
                <IoSearch size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('account')} className='hover:opacity-100 opacity-70' >
                <IoPersonCircleOutline size={30} color='white' />
            </button>
        </span>
        )
    }
    return (
        <span className=' flex items-center justify-around fixed z-50 bg-button w-screen bottom-0 h-[60px]'>
            <button type='button'   onClick={()=>updateActiveTab('home')} className='hover:opacity-100 opacity-70'>
                <IoHomeOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('ranking')}  className='hover:opacity-100 opacity-70' >
                <IoTrophyOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('search')} className='hover:opacity-100 opacity-70' >
                <IoSearchOutline size={30} color='white' />
            </button>
            <button type='button' onClick={()=>updateActiveTab('account')} className='hover:opacity-70' >
                <IoPersonCircle size={30} color='white' />
            </button>
        </span>
    )
}