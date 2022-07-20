import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { WagmiConfig, createClient, createStorage } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
  // storage: createStorage({ storage: window.localStorage }),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
      </WagmiConfig>
    )
}

export default MyApp
