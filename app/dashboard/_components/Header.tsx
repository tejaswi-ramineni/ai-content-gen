import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm bg-gradient-to-r from-[#0F172A] via-[#4F46E5] to-[#EC4899] flex justify-end items-center'>
      <div className='flex gap-5 items-center'>
        
        <UserButton appearance={{ elements: { userButtonAvatarBox: 'border-2 border-white' } }} />
      </div>
    </div>
  )
}

export default Header