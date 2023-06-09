import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'
import {useRouter} from 'next/router'

function LoginForm() {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-[25px] mt-[40px]">
      <p className="text-[20px] leading-[36px] text-center bg-clip-text text-transparent bg-linearText font-bold">
        Đăng nhập
      </p>
      <InputWithIcon icon={<AccountIcon />} placeholder="Tên đăng nhập" />
      <InputWithIcon icon={<AccountIcon />} placeholder="Mật khẩu" />
      <p className="text-[10px] text-[#22DDF2] leading-[20px] text-center underline font-bold mb-[20px]">
        Quên mật khẩu ?
      </p>
      <div className="text-center">
        <p className="text-[10px] text-[#A7A7A7] leading-[20px] text-center inline">
          Bạn chưa có tài khoản ?
        </p>
        <p
          className="text-[10px] text-[#22DDF2] leading-[20px] text-center font-bold inline"
          onClick={() => {
            router.push('/register')
          }}
        >
          {` Đăng ký`}
        </p>
      </div>
    </div>
  )
}

export default LoginForm
