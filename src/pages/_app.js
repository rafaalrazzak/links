import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import splitbee from '@splitbee/web'
export default function App({ Component, pageProps }) {
  splitbee.init()
  return (
    <Component {...pageProps} />
  )
}