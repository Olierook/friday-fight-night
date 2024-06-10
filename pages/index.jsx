import Head from "next/head";
import settings from "../content/settings.json";
import { Suspense } from "react";
import VideoBackground from "../components/blocks/VideoBackground";
import { list } from "@vercel/blob";
import useColor from "../hooks/useColor";




export default function HomePage({videoUrl}) {
    const colors = useColor();
    return (
        <>
            <Head>
                <title>{settings.basetitle}</title>
            </Head>
            <div className="videocontainer">
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoBackground url={videoUrl} />
                </Suspense>
            </div>
            <div className="header"/>
            <style jsx>{`
                .videocontainer {
                    width: 100svw;
                    height: 100svh;
                    position: fixed;
                    display: flex; 
                    justify-content: center; 
                    align-items: center;
                }
                .header {
                    width: 100%;
                    height: 30px;
                    {/* background: ${colors.background}; */}
                    position: absolute;
                }
                `}</style>
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