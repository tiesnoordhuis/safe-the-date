import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Thank you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>RSVP Received!</h1>
        <p>Thank you for letting us know</p>
        <Link href="/"><a>home page</a></Link>
      </main>

      <Footer />
    </div>
  )
}
