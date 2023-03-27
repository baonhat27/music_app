import Image from 'next/image'
import React, {useState} from 'react'
import PauseIcon from '@/public/images/Pause.svg'

function PlayingBar() {
  const [isPlaying, setIsPlaying] = useState(true)

  const handleClickPlayOrPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="flex items-center justify-between h-[84px] rounded-[40px] bg-[#361E60] px-[16px] py[12px]">
      <div className="flex gap-[12px] flex-1 h-[38px]">
        <Image
          src="/images/playingMusic.png"
          alt=""
          width={38}
          height={38}
          className={isPlaying ? 'animate-spin-slow' : ''}
        />
        <div className="flex flex-col gap-[4px]">
          <p className="mainText">Thunder</p>
          <p className="subText">Imagine Dragon</p>
        </div>
      </div>
      <PauseIcon onClick={handleClickPlayOrPause} />
    </div>
  )
}

export default PlayingBar
