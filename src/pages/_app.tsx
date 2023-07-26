import type { AppProps } from 'next/app'
import Global from 'src/styles/Global'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  )
}
