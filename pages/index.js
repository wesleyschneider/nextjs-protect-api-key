import { useEffect } from 'react';
import Head from 'next/head'
import { getImageDog, internalApiGetImageDog } from '../src/services';

export default function Home() {
  useEffect(() => {
    getImageDog();
    internalApiGetImageDog();
  }, [])

  return (
    <div>
      <Head>
        <title>Protect API Key</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Protect API Key
        </h1>
        <p>
          Nas requisições a seguir, procure o request header <b>x-api-key</b>.
        </p>
        <ul>
          <li>https://api.thedogapi.com/v1/images/search <b>(exibe api key)</b></li>
          <li>http://localhost:3000/api/dog <b>(esconde api key)</b></li>
        </ul>
      </main>
    </div>
  )
}
