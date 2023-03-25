import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'

function LoginForm() {
  return (
    <div className="flex flex-col gap-[25px] mt-[70px]">
      <InputWithIcon icon={<AccountIcon />} placeholder="Tên đăng nhập" />
      <InputWithIcon icon={<AccountIcon />} placeholder="Mật khẩu" />
    </div>
  )
}

export default LoginForm
