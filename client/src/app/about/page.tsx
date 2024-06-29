import Head from 'next/head';

/**
 * About page.
 * 
 * @returns {JSX.Element} About page.
 */
export default function About() {
    return (
      <div>
        <Head>
          <title>About TikTok Concerts</title>
          <meta name="description" content="Learn more about TikTok Concerts." />
        </Head>
        <main className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold my-4'>About TikTok Concerts</h1>
          <p className='text-lg'>Watch your favorite artists perform live on TikTok.</p>
        </main>
      </div>
    );
  }