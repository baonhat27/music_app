import React from 'react'
import LeftArrow from '@/public/images/ArrowLeft.svg'
import Heart from '@/public/images/heart2.svg'
import Share from '@/public/images/Share.svg'
import More from '@/public/images/More.svg'
import withBottomBar from '@/src/layout/withBottomBar'
import Image from 'next/image'
import SongCard from '@/src/components/SongCard'
import {useRouter} from 'next/router'
import songsInAlbum from '@/src/utils/mock'

function AlbumDetail() {
  const router = useRouter()
  return (
    <div className="bg-subBg w-screen p-[20px] h-screen flex flex-col items-center">
      <div className="w-full flex justify-between items-center mt-[30px] mb-[8px]">
        <LeftArrow
          onClick={() => {
            router.back()
          }}
        />
        <More />
      </div>

      <div className="flex flex-col gap-[10px] min-w-[150px] mb-[20px]">
        <Image src={'/images/albumMck.png'} width={150} height={150} alt="" />
        <p className="title">“99%” the albums</p>
        <p className="subText text-center">RPT MCK - 16 bài hát</p>
      </div>

      <div className="flex justify-between items-center w-full mb-[20px]">
        <div className="flex flex-col">
          <Heart />
          <p className="subText">10N +</p>
        </div>
        <div className="h-[40px] bg-[#361E60] px-[25px] py-[10px] rounded-[40px] mainText">
          Phát ngẫu nhiên
        </div>
        <div className="flex flex-col ">
          <Share />
          <p className="subText">10N +</p>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] w-full overflow-y-auto flex-1 mb-[100px]">
        {songsInAlbum.map((item) => (
          <SongCard
            name={item?.name}
            artist={item?.artist}
            key={`${item?.name}`}
            isHeartIconVisible
          />
        ))}
      </div>
    </div>
  )
}

export default withBottomBar(AlbumDetail)
