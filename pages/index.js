import Head from 'next/head';
import Feed from '../components/FeedComponents/Feed';
import Header from '../components/HeaderComponents/Header';

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Pixx</title>
        <link rel="icon" href="/pixx.ico" />
      </Head>

      <Header />
      <Feed />

      {/* TODO: Modal Component */}
    </div>
  )
}
