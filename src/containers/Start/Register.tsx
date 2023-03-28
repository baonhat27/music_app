import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'
import LockOpenIcon from '@/public/images/lock_open.svg'

function RegisterForm() {
  return (
    <div className="flex flex-col gap-[25px] mt-[70px]">
      <p className='form-header'>Đăng ký tài khoản</p>
      <InputWithIcon icon={<AccountIcon />} placeholder="Email đăng ký" type="email"/>
      <InputWithIcon icon={<LockOpenIcon />} placeholder="Mật khẩu" type="password"/>
      <InputWithIcon icon={<LockOpenIcon />} placeholder="Nhập lật khẩu" type="password"/>
      <p className='text-[#A7A7A7] font-normal text-center'>Bạn đã có tài khoản ? <a href="/login" className="form-link">Đăng nhập</a></p>
    </div>
  )
}

export default RegisterForm 
