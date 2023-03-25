import AccountIcon from '@/public/images/account_circle.svg'
import SearchIcon from '@/public/images/search.svg'
import BellIcon from '@/public/images/Bell.svg'
import SlideBanner from '@/src/containers/SlideBanner'

export default function Home() {
  return (
    <>
      <div className="flex flex-row gap-[15px] items-center justify-between w-full">
        <AccountIcon />
        <div className="flex flex-row gap-[12px] bg-[#361E60] px-[20px] py-[5px] rounded-[30px] items-center w-full">
          <SearchIcon />
          <input
            className="bg-[#361E60] text-[#A7A7A7] text-xs w-full"
            placeholder="Nhập tên bài hát hoặc nghệ sỹ"
          />
        </div>
        <BellIcon />
      </div>

      <SlideBanner />
    </>
  )
}
