import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container"   
    style={{ 
      position: 'relative',
      backgroundImage: 'url(/bg-sky2.jpg)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      color: 'rgb(147, 11, 56)'
    }}
    >
      <Head>
        <title>Thank you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>RSVP Received!</h1>
        <img src='/us2.jpeg' style={{ objectFit: 'contain'}} />
        <p>Thank you for letting us know</p>
        <Link href="/"><a>Back</a></Link>
      </main>

      <Footer />
    </div>
  )
}
