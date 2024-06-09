import Head from "next/head";
import settings from "../content/settings.json";

//
export default function HomePage() {

    return (
        <>
            <Head>
                <title>{settings.basetitle}</title>
            </Head>
        </>
    );
}