import Image from 'next/image'
import React from 'react'

interface ArtistCardProps {
  name: string
  imageUrl: string
  isAlbumCard?: boolean
  albumName?: string
}

function ArtistCard(props: ArtistCardProps) {
  const {name, imageUrl, isAlbumCard = false, albumName = ''} = props
  return (
    <div className="flex flex-col gap-[10px] max-w-[150px] min-w-[150px]">
      <Image src={imageUrl} width={150} height={150} alt="" />
      {isAlbumCard && <p className="mainText">{albumName}</p>}
      <p className="subText">{name}</p>
    </div>
  )
}

export default ArtistCard
