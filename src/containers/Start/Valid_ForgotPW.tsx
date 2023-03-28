import React from 'react'
import InputWithIcon from '@/src/components/Input'
import AccountIcon from '@/public/images/account_circle.svg'

function ValidForgotPW() {
  return (
    <div className="flex flex-col gap-[25px] mt-[70px]">
      <p className='form-header'>Quên mật khẩu</p>
      <InputWithIcon icon={<AccountIcon />} placeholder="Nhập mã xác minh" type="email"/>
      <a href="/login" className="form-link">Quay lại đăng nhập </a>
      <p className='text-[#A7A7A7] font-normal text-center'>Bạn chưa có tài khoản ? <a href="/register" className="form-link">Đăng ký</a></p>
    </div>
  )
}

export default ValidForgotPW
