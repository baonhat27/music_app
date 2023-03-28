import Image from 'next/image'
import React, {useState} from 'react'
import PauseIcon from '@/public/images/Pause.svg'
import PlayIcon from '@/public/images/Play.svg'
import Line from '@/public/images/Line.svg'

function PlayingBar() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClickPlayOrPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="w-[calc(100%-40px)] fixed bottom-0 flex items-center justify-between h-[70px] rounded-[40px] bg-[#361E60] px-[16px] py[12px] mb-[30px]">
      <Line className="absolute right-[-5px] top-[-5px] z-[-999]" />
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
      {isPlaying ? (
        <PauseIcon onClick={handleClickPlayOrPause} />
      ) : (
        <PlayIcon onClick={handleClickPlayOrPause} />
      )}
    </div>
  )
}

export default PlayingBar
