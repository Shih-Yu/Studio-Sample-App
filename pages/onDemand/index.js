import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/OnDemand.module.css";

export default function Home() {
  return (
    <div className="bg-neutral-50 px-8">
      <Head>
        <title>Livepeer Studio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} s>
          Welcome to On Demand Videos 🎞
        </h1>

        <div className={styles.grid}>
          <Link href="onDemand/listAssets">
            <a className={styles.card}>
              <h2>List All Assets &rarr;</h2>
              <p>Gets all assets from your account</p>
            </a>
          </Link>

          <Link href="onDemand/listAssetsReady">
            <a className={styles.card}>
              <h2>List Ready Assets &rarr;</h2>
              <p>Gets all assets that has a ready status</p>
            </a>
          </Link>

          <Link href="onDemand/listAssetId">
            <a className={styles.card}>
              <h2>List Assets by Id &rarr;</h2>
              <p>Gets specific asset by Id</p>
            </a>
          </Link>
        </div>

        <div className={styles.grid}>
          <Link href="onDemand/uploadURL">
            <a className={styles.card}>
              <h2>Upload with URL &rarr;</h2>
              <p>Upload an asset with a download URL</p>
            </a>
          </Link>

          <Link href="onDemand/uploadLocal">
            <a className={styles.card}>
              <h2>Upload with Local Storage &rarr;</h2>
              <p>Upload asset with file from local storage</p>
            </a>
          </Link>

          <Link href="onDemand/updateAsset">
            <a className={styles.card}>
              <h2>Update an Asset &rarr;</h2>
              <p>Update an existing stored asset</p>
            </a>
          </Link>

          <Link href="onDemand/deleteAsset">
            <a className={styles.card}>
              <h2>Delete an Asset &rarr;</h2>
              <p>Delete a stored asset</p>
            </a>
          </Link>
        </div>
        <h3>
          <Link href="/">
            <a>&larr; Back to Home Page </a>
          </Link>
        </h3>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
