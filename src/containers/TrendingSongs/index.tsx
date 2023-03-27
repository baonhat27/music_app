import SongCard from '@/src/components/SongCard'
import {category, categoryName} from '@/src/utils/constants'
import React, {useState} from 'react'
import trendingSongs from './trendingSong'

function TrendingSongs() {
  const [cate, setCate] = useState('VN')

  const handleChangeCate = (cate: string) => () => {
    setCate(cate)
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="title">Top bài hát yêu thích</h1>
      <div className="flex flex-row gap-[5px]">
        {category?.map((item) => {
          return (
            <div
              key={item}
              className={`h-[20px] rounded-[40px] text-[10px] text-[#ffffff] px-[5px] py-[3px] ${
                cate === item
                  ? 'bg-gradient-to-r from-indigo-500'
                  : 'bg-[#361E60]'
              } `}
              onClick={handleChangeCate(item)}
            >
              {
                categoryName?.[
                  item as keyof {
                    VN: string
                    IN: string
                  }
                ]
              }
            </div>
          )
        })}
      </div>
      <div className="flex flex-col gap-[10px]">
        {trendingSongs
          ?.filter((i) => i?.category === cate)
          .map((item) => (
            <SongCard
              name={item?.name}
              artist={item?.artist}
              key={`${item?.name}`}
            />
          ))}
      </div>
    </div>
  )
}

export default TrendingSongs
