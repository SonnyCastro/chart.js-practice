import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Line from "../components/Line";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta
          property="og:description"
          content="Kresko is a synthetic asset protocol that facilitates the minting of over-collateralized synthetic assets."
        />
        <meta property="og:title" content="Kresko" />
      </Head>
      <Line />
    </div>
  );
}
