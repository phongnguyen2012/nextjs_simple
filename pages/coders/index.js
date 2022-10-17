import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Coder.module.css';


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {coders: data}
  }
}

export default function Allcoders({coders}) {
  return (
    <>
    <Head>
      <title>All coder</title>
      <meta name="keywords" content="coders" />
    </Head>
      <div>
      <h1>All coders</h1>
      {
        coders.map((coder) => (
          <Link href={"/coders/" + coder.id} key={coder.id}>
            <a className={styles.single}>
              <h3>{coder.name}</h3>
            </a>
          </Link>
        ))}
    </div>
    </>
  
  )
}
