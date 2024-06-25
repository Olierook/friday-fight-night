import { list } from "@vercel/blob";
import Head from "next/head";
import InformationTiles from "../components/section/InformationTiles";
import VideoBackground from "../components/video/VideoBackground";
import settings from "../content/settings.json";
import useSetBreakpoints from "../hooks/screensize/useSetBreakpoints";
import { useFirebaseValue } from "./../hooks/data/useFirebaseValue";



export default function HomePage({ videoUrl }) {
    useSetBreakpoints(600, 1100);
    const [test] = useFirebaseValue("test");
    console.log({ test });


    return (
        <>
            <Head>
                <title>{settings.basetitle}</title>
            </Head>
            <VideoBackground
                url={videoUrl}
                playbackRate={0.65}
                videoRatio="1280:720"
                preload="auto"
                type="video/mp4"
                autoPlay
                loop
                playsInline
                muted
            />
            <InformationTiles />
        </>
    );
}

export async function getStaticProps() {
    const fileName = "FFN2024.mp4";
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