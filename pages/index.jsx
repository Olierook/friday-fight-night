import Head from "next/head";
import settings from "../content/settings.json";
import { Suspense, useState } from "react";
import VideoBackground from "../components/blocks/VideoBackground";
import { list } from "@vercel/blob";
import useColor from "../hooks/useColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as lib from "@fortawesome/free-brands-svg-icons";
import * as lib2 from "@fortawesome/free-solid-svg-icons";
import { useStoreValue } from "./../hooks/useStoreValue";
import useSetBreakpoints from "../hooks/useSetBreakpoints";






export default function HomePage({videoUrl}) {
    useSetBreakpoints(600, 1100);
    const [gw, setGw] = useState(false);
    const [bh, setBh] = useState(false);
    const [gw2, setGw2] = useState(false);
    const [bh2, setBh2] = useState(false);
    const [isSmall] = useStoreValue("isSmall");
    const [isMedium] = useStoreValue("isMedium");
    const colors = useColor();

    const ticketlink = "https://www.patronaat.nl";
    const gwinsta = "https://www.instagram.com/goldwolffband/";
    const bhinsta = "https://www.instagram.com/bokshuis/";
    const gwsite = "https://goldwolffband.com";
    const bhsite = "https://bokshuis.nl/";

    const gosite = (url) => () => window.open(url, "_blank");
        
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
            <div className="containercontainer">
                <div className={`contentcontainer ${isSmall ? "cc-small" : isMedium ? "cc-medium" : "cc-big"}`}>
                    <div className="plane title germania">FRIDAY FIGHT NIGHT</div>
                    <div className="plane date">6/9/2024</div>
                    <div className="plane tickets" onClick={gosite(ticketlink)}  >GET TICKETS NOW</div>
                    <div className="plane location">Patronaat Haarlem</div>
                    <div className="plane content">
                        <h1 className="germania">Heavy Music, Heavy Matches</h1>
                        <p>Welkom bij de 2e editie van Friday Fight Night! Na een succesvolle eerste editie in de Nobel te Leiden met het NK Superzwaargewicht en optredens van onder andere Dikke Dennis en de Røckers, zijn we terug met een nog spectaculairder evenement. Deze keer kun je genieten van optredens van Hang Youth, Bongloard en meer, wederom gecombineerd met spannende bokswedstrijden.</p>
                        <p>Het concept van Friday Fight Night is simpel: Heavy Music, Heavy Matches. Dit unieke evenement wordt georganiseerd door een samenwerking van Heavy Rock &apos;n Roll-band Goldwölff en het Bokshuis. Mis het niet!</p>
                    </div>
                    <div className="plane soc instagw" onClick={gosite(gwinsta)} onMouseEnter={() => setGw(true)} onMouseLeave={() => setGw(false)} ><FontAwesomeIcon icon={lib.faInstagram} spin={gw}/><p>Goldwölff</p></div>
                    <div className="plane soc sitegw" onClick={gosite(gwsite)} onMouseEnter={() => setGw2(true)} onMouseLeave={() => setGw2(false)}><FontAwesomeIcon icon={lib2.faGlobe} spin={gw2}/><p>Goldwölff</p></div>
                    <div className="plane soc sitebh" onClick={gosite(bhsite)} onMouseEnter={() => setBh2(true)} onMouseLeave={() => setBh2(false)}><FontAwesomeIcon icon={lib2.faGlobe} spin={bh2}/><p>Bokshuis</p></div>
                    <div className="plane soc instabh" onClick={gosite(bhinsta)} onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)} ><FontAwesomeIcon icon={lib.faInstagram} spin={bh}/><p>Bokshuis</p></div>

                </div>
            </div>
            <style jsx>{`


                .videocontainer {
                    width: 100svw;
                    height: 100svh;
                    position: fixed;
                    display: flex; 
                    justify-content: center; 
                    align-items: center;

                }
                .containercontainer {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                }
                .contentcontainer {

                    height: 100%;
                    width: 100%;
                    display: grid;
                    gap: 15px;
                    margin: auto;
   
                    }
                .cc-small {
                    padding: 15px;
                    grid-template:
                        [row3-start] "empty empty empty empty" 20px [row3-end]
                        [row1-start] "title title title title" 75px [row1-end]
                        [row2-start] "date tickets tickets location" 50px [row2-end]
                        [row3-start] "empty2 empty2 empty2 empty2" 20px [row3-end]
                        [row4-start] "content content content content" min-content [row4-end]
                        [row5-start] "space space space space" 1fr [row5-end]
                        [row6-start] "instagw sitegw sitebh instabh" 75px [row6-end]
                        / 1fr 1fr 1fr 1fr;
                }
                .cc-medium {
                    align-self: center;
                    padding: 10svh 0;
                    grid-template:
                        [row1-start] "title title title title title title title" 150px [row1-end]
                        [row3-start] "nothing nothing nothing nothing nothing nothing nothing" 15px [row3-end]
                        [row4-start] "empty content location location date date space" min-content [row4-end]
                        [row6-start] "empty content instagw sitegw sitebh instabh space" 100px [row6-end]
                        [row2-start] "empty content tickets tickets tickets tickets space" min-content [row2-end]
                        / 1fr 225px 75px 75px 75px 75px 1fr;
                }
                .cc-big {
                    align-self: center;
                    padding: 10svh 0;
                    grid-template:
                        [row1-start] "title title title title title title" 150px [row1-end]
                        [row3-start] "nothing nothing nothing nothing nothing nothing" 15px [row3-end]
                        [row4-start] "empty content date instagw instabh space" 100px [row4-end]
                        [row6-start] "empty content location sitegw sitebh space" 100px [row6-end]
                        [row2-start] "empty content tickets tickets tickets space" min-content [row2-end]
                        / 1fr 400px 250px 150px 150px 1fr;
                }
                .plane {
                    background-image: radial-gradient(circle at 100%, ${colors.backgroundDark}66, ${colors.backgroundDark}CC);
                    color: ${colors.backgroundDarkText};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 4px;
                    box-shadow: 7px 4px 14px 3px ${colors.backgroundDark};
                }
                .title {
                    grid-area: title;
                    background-color: ${colors.primary}99;
                    background-image: radial-gradient(circle at center center, ${colors.tertiary}99, ${colors.primary}99), repeating-radial-gradient(circle at center center, ${colors.secondary}, ${colors.tertiary}, 10px, transparent 18%, transparent 10px);
                    background-blend-mode: multiply;
                    background-position: center;
                    color: ${colors.primaryText};
                    font-size: 30px;
                    animation: colorChange 40s infinite alternate linear;
                }

                @keyframes colorChange {
                    from {
                        background-size: 100% 100%;
                    }     
                    25% {
                        background-size: 150% 200%;
                        }
                    
                    50% {
                        background-size: 200% 100%;
                        }
                                  
                    75% {
                        background-size: 150% 200%;
                        }
                    
                    to {
                        background-size: 100% 100%;
                        }
                    }
                .cc-big > .title {
                    font-size: 100px;
                }
                .date {
                    grid-area: date;
                    font-size: 13px;
                    font-weight: 700
                }

                .tickets {
                    grid-area: tickets;
                    background: ${colors.secondary}99;
                    background-image: linear-gradient(217deg, ${colors.primary}66, ${colors.secondary}99);
                    color: ${colors.secondaryText};
                    font-size: 16px;
                    font-weight: 800;
                    transition: all 500ms;

                }
                .cc-big > .tickets {
                    font-size: 20px;
                }

                .tickets:hover {
                    grid-area: tickets;
                    background: ${colors.tertiary}99;
                    color: ${colors.tertiaryText};
                    font-size: 16px;
                    font-weight: 800;
                    cursor: pointer;

                }
                .location {
                    grid-area: location;
                    font-size: 13px;
                    font-weight: 700


                }
                .content {
                    grid-area: content;
                    background-image: radial-gradient(circle at 100%, ${colors.backgroundDark}66, ${colors.background}CC);
                    padding: 15px 15px;
                    text-align: justify;
                    flex-direction: column;
                    gap: 15px;

                }

                .content > h1 {
                    font-size: 18px;
                    margin: 6px 0 0 0;
                    align-self: baseline;
                    color: ${colors.secondary};
                    text-shadow: 1px 1px 7px ${colors.backgroundDark};
                }

                .cc-small > .soc {
                    background: ${colors.secondary}66;
                    background-image: linear-gradient(217deg, ${colors.backgroundDark}66, ${colors.secondary}66);
                    color: ${colors.secondaryText};
                }
                .soc {
                    font-size: 30px;
                    flex-direction: column;
                    gap: 5px;
                    transition: all 500ms;
                }
                .soc:hover {
                    background: ${colors.tertiary}99;
                    color: ${colors.tertiaryText};
                    cursor: pointer;
                }
                .soc > p {
                    font-size: 12px;
                }
                .instagw {
                    grid-area: instagw;
                }
                .sitegw {
                    grid-area: sitegw;
                }
                .sitebh {
                    grid-area: sitebh;
                }
                .instabh {
                    grid-area: instabh;
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