import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Asset.module.css";

export async function getStaticPaths() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return {
    paths: data.map((data) => ({
      params: { id: data.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://livepeer.studio/api/asset/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return {
    props: {
      assets: data,
    },
  };
}

export default function Details({ assets }) {
  const {
    query: { id },} = useRouter();
 
  return (
    <div>
      <div className={styles.card} key={id}>
        <a>
          <Image src={logo} alt="Livepeer Studio Logo" width="256" height="256" />
          <h2> {assets.name} </h2>
          <p>Status:</p>
          {assets.status.phase === "ready" ? (
            <p className={styles.ready}>{assets.status.phase} </p>
          ) : (
            <p className={styles.failed}>{assets.status.phase}</p>
          )}
          <p>Id:</p>
          { assets.id }
          
          {assets.status.phase === "ready" ? (
            null
          ) : <div> <p>Error:</p> {assets.status.errorMessage} </div> }
          {assets.status.phase === "ready" ? (
            <div>
             <p> Playback Id:</p>{assets.playbackId}
            </div>
          ) : null}
          {assets.status.phase === "ready" ? (
            <div>
              <p>Playback URL</p> {assets.playbackUrl} 
            </div>
          ) : null}
          {assets.status.phase === "ready" ? (
            <div>
              <p>DownloadUrl</p>
              <a className={styles.url} href={assets.downloadUrl} target="_blank" rel="noreferrer">
                {assets.downloadUrl}
              </a>{" "}
            </div>
          ) : null}
        </a>
      </div>
    </div>
  );
}