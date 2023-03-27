import ArtistCard from '@/src/components/ArtistCard'
import React from 'react'
import trendingArtistSample from './trendingArtist'

function TrendingArtist() {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="title">Nghệ sĩ thịnh hành</p>
      <div className="flex flex-row gap-[10px] overflow-x-auto">
        {trendingArtistSample?.map((item) => (
          <ArtistCard
            key={item?.name}
            name={item?.name}
            imageUrl={item?.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default TrendingArtist
