import React from 'react'
import { GoogleTagManager } from '@next/third-parties/google'

const Home = () => {
  return (
    <div>
        <GoogleTagManager gtmId="GTM-WR9GTPP4" />
        <p>Home</p>
    </div>
  )
}

export default Home