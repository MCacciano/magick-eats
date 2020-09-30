import Head from 'next/head';
import { useEffect } from 'react';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import client from '../client';

const builder = imageUrlBuilder(client);
const urlFor = source => builder.image(source);

const pageQuery = groq`
  *[_type == "burger"] {
    "id": _id,
    name,
    img,
  }
`;

const Home = props => {
  useEffect(() => {
    console.log('props :>> ', props);
  }, []);
  return (
    <div>
      <Head>
        <title>Magick Eats</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Magick Eats</h1>
        <ul>
          {props.burgers.map(burger => (
            <li>
              <h2>{burger.name}</h2>
              <img src={urlFor(burger.img).width(200).url()} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const burgers = await client.fetch(pageQuery);

  return {
    props: {
      burgers
    }
  };
};

export default Home;
