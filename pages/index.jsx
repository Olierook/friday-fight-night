import Head from "next/head";
import Video from "../components/blocks/Video";
import settings from "../content/settings.json";


export default function HomePage() {
    return (
        <>
            <Head>
                <title>{settings.basetitle}</title>
            </Head>
            <div className="hoi" style={{width: "100vw", height: "100vh"}}>
                <Video/> 
            </div>
        </>
    );
}