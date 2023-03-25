import Image from 'next/image'
import React from 'react'

function Banner({url}: any) {
  return (
    <div style={{width: '300px', height: '100px', position: 'relative'}}>
      <Image src={url} alt="" fill sizes="100vw" />
    </div>
  )
}

export default Banner
