// Default core packages
import { Head, Html, Main, NextScript } from "next/document";
import settings from "../content/settings.json";

const website = "https://" + settings.sitename + "." + settings.countrycode;

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content={settings.description} />
                <link rel="icon" href="favicon/favicon.ico" />
                <meta property="og:title" content={settings.basetitle} />
                <meta property="og:url" content={website} />
                <meta property="og:image" content={website + "/ogimage.jpg"} />
                <meta property="og:image" content={website + "/ogsquare.jpg"} />
                <meta property="og:type" content="website" />
                <meta name="theme-color" content="black" />
                <link
                    href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Germania+One&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>\
        </Html>
    );
}