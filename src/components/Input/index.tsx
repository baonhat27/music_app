import React, {InputHTMLAttributes, ReactNode} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

function InputWithIcon(props: InputProps) {
  const {icon, ...rest} = props
  return (
    <div className="flex flex-row gap-[12px] bg-[#361E60] p-[16px] rounded-[30px] items-center justify-center">
      {icon}
      <input className="bg-[#361E60] text-[#A7A7A7]" {...rest} />
    </div>
  )
}

export default InputWithIcon
