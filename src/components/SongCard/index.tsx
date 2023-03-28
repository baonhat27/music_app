import React from 'react'
import MusicIcon from '@/public/images/music.svg'
import HeartIcon from '@/public/images/heart2.svg'

interface SongProps {
  name: string
  artist: string
  isHeartIconVisible?: boolean
}

function SongCard(props: SongProps) {
  const {name, artist, isHeartIconVisible = false} = props
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-[12px]">
        <MusicIcon />
        <div className="flex flex-col gap-[4px]">
          <p className="mainText">{name}</p>
          <p className="subText">{artist}</p>
        </div>
      </div>
      {isHeartIconVisible && <HeartIcon />}
    </div>
  )
}

export default SongCard
