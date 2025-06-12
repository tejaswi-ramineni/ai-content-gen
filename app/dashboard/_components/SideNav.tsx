"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
        },
        // {
        //     name:'Billing',
        //     icon:WalletCards,
        //     path:'/dashboard/billing'
        // },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/settings'
        },

    ]

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className="h-screen relative p-5 shadow-sm bg-gradient-to-b from-[#0F172A] via-[#4F46E5] to-[#EC4899] text-white">
        <div className='flex justify-center'>
            <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899]">Content Creator</span>
        </div>
        <hr className='my-6 border-white/20' />
        <div className='mt-3'>
            {MenuList.map((menu,index)=>(
                <Link href={menu.path} key={menu.name}>
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-[#EC4899] hover:text-white rounded-lg
                    cursor-pointer items-center transition-all duration-200
                    ${path==menu.path ? 'bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white shadow-lg' : 'bg-white/5 text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        {/* <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack/>
        </div> */}
    </div>
  )
}

export default SideNav