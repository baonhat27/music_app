import Image from 'next/image'
import React from 'react'

function Banner({url}: any) {
  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        position: 'relative',
      }}
    >
      <Image src={url} alt="" fill sizes="100vw" className="rounded-[20px]" />
    </div>
  )
}

export default Banner
