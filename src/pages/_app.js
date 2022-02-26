import '@/css/globals.css'
import splitbee from '@splitbee/web'
export default function App({ Component, pageProps }) {
  splitbee.init()
  return (
    <Component {...pageProps} />
  )
}