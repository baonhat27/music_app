import React from 'react'
import HeadPhone from '@/public/images/headphones.svg'
import LoginForm from '@/src/containers/LoginForm'
import NextIcon from '@/public/images/Next.svg'

export default function Login() {
  return (
    <>
      <div className="bg-bgColor w-full h-screen flex flex-col items-center">
        <HeadPhone className="mt-[60px]" />
        <h1 className="text-2xl text-[#ED1BA3] font-bold">The sound of life</h1>
        <p className="text-sm text-[#E7E7E7] font-medium text-center mt-[8px] ">
          Music is not an entertainment, but also it is our life
        </p>
        <LoginForm />
        <NextIcon className="mt-[70px]" />
      </div>
    </>
  )
}
