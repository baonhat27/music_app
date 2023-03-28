import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'
import LockOpenIcon from '@/public/images/lock_open.svg'

function LoginForm() {
  return (
    <div className="flex flex-col gap-[25px] mt-[70px]">
      <p className='form-header'>Đăng nhập</p>
      <InputWithIcon icon={<AccountIcon />} placeholder="Email đăng nhập" />
      <InputWithIcon icon={<LockOpenIcon />} placeholder="Mật khẩu" type="password"/>
      <a href="/fgp" className="form-link">Quên mật khẩu ?</a>
      <p className='text-[#A7A7A7] font-normal text-center'>Bạn chưa có tài khoản ? <a href="/register" className="form-link">Đăng ký</a></p>
    </div>
  )
}

export default LoginForm
