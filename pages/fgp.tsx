import React from 'react'
import HeadPhone from '@/public/images/headphones.svg'
import {ForgotPassWordForm} from '@/src/containers/Start'
import NextIcon from '@/public/images/Next.svg'

export default function ForgotPassWord() {
  return (
    <>
      <HeadPhone className="mt-[60px]" />
      <h1 className="text-2xl text-[#ED1BA3] font-bold">The sound of life</h1>
      <p className="text-sm text-[#E7E7E7] font-medium text-center mt-[8px] ">
        Music is not an entertainment, but also it is our life
      </p>
      <ForgotPassWordForm />
      <NextIcon className="mt-[70px]" />
    </>
  )
}
