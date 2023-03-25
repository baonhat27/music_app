import '@/styles/globals.css'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className="w-screen h-screen  flex flex-col items-center p-[20px]">
      <Component {...pageProps} />
    </div>
  )
}
