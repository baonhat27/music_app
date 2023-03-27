import ArtistCard from '@/src/components/ArtistCard'
import React from 'react'
import trendingArtistSample from './trendingArtist'

function TrendingAlbums() {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="title">Albums được yêu thích</p>
      <div className="flex flex-row gap-[10px] overflow-x-auto">
        {trendingArtistSample?.map((item) => (
          <ArtistCard
            key={item?.name}
            name={item?.name}
            imageUrl={item?.imageUrl}
            isAlbumCard={true}
            albumName={item?.albumName}
          />
        ))}
      </div>
    </div>
  )
}

export default TrendingAlbums
