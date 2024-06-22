import Head from 'next/head';

export default function Contact() {
    return (
      <div>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Get in touch with us." />
        </Head>
        <main className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold my-4'>Contact Us</h1>
          <p className='text-lg'>Get in touch with us.</p>
          <form className='mt-8 space-y-6'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input type="text" name='name' id='name' required className='mt-1 p-2 border w-full' />
            </div>
            <div>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea name="message" id="message" required className='mt-1 p-2 border w-full' rows="4"></textarea>
            </div>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>Submit</button>
          </form>
        </main>
      </div>
    );
  }