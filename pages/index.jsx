import Head from "next/head";
import settings from "../content/settings.json";
import { Suspense } from "react";
import VideoBackground from "../components/blocks/VideoBackground";
import { list } from "@vercel/blob";




export default function HomePage({videoUrl}) {
    return (
        <>
            <Head>
                <title>{settings.basetitle}</title>
            </Head>
            <div className="hoi" style={{width: "100vw", height: "100vh"}}>
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoBackground url={videoUrl} />
                </Suspense>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const fileName="FFN2024.mp4";
    const getUrl = async () => {
        let { blobs } = await list({
            prefix: fileName,
            limit: 1,
            token: process.env.BLOB_READ_WRITE_TOKEN
        });
        return blobs[0].url;
    };
    const videoUrl = await getUrl();

    
    // Pass data to the page via props
    return { props: { videoUrl } };
}