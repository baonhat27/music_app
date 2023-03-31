import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'
import {useRouter} from 'next/router'

function RegisterForm() {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-[25px] mt-[40px]">
      <p className="text-[20px] leading-[36px] text-center bg-clip-text text-transparent bg-linearText font-bold">
        Đăng ký tài khoản
      </p>
      <InputWithIcon icon={<AccountIcon />} placeholder="Email đăng ký" />
      <InputWithIcon icon={<AccountIcon />} placeholder="Mật khẩu" />

      <div className="text-center">
        <p className="text-[10px] text-[#A7A7A7] leading-[20px] text-center inline">
          Bạn đã có tài khoản ?
        </p>
        <p
          className="text-[10px] text-[#22DDF2] leading-[20px] text-center font-bold inline"
          onClick={() => {
            router.push('/login')
          }}
        >
          {` Đăng nhập`}
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
