import * as lib from "@fortawesome/free-brands-svg-icons";
import * as lib2 from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useColor from "../../hooks/color/useColor";
import goToSite from "../../lib/functions/goToSite";
import AbsoluteFullSizeCenterContainer from "../containers/AbsoluteFullSizeCenterContainer";
import ResponsiveGridContainer from "../containers/ResponsiveGridContainer";


const InformationTiles = () => {
    const [gw, setGw] = useState(false);
    const [bh, setBh] = useState(false);
    const [gw2, setGw2] = useState(false);
    const [bh2, setBh2] = useState(false);

    const colors = useColor();

    const ticketlink = "https://www.ticketmaster.nl/event/307151";
    const eventLink = "https://patronaat.nl/event/friday-fight-night-boxing-06-09-24/";
    const gwinsta = "https://www.instagram.com/goldwolffband/";
    const bhinsta = "https://www.instagram.com/bokshuis/";
    const gwsite = "https://goldwolffband.com";
    const bhsite = "https://bokshuis.nl/";


    /*
        Zeg maar dag tegen je standaard vrijdagavond in de kroeg, want op vrijdag 6 september 2024 gaan er klappen vallen! Meerdere boksmatches zullen er plaatsvinden van onder andere boksgyms uit Haarlem, Leiden en omstreken, terwijl het gitaargeweld tussen de wedstrijden van het podium schalt.

        Friday Fight Night is een unieke combinatie van boksen en muziek, georganiseerd door Bokshuis en Goldwölff.

        Met de slagzin ‘Heavy Matches, Heavy Music’ is het overduidelijk wat je staat te wachten:

        Een fantastische line-up van bands:

        Hang Youth
        Goldwölff
        Bongloard
        Eskalatie 

        Met daarnaast op de planning meer dan tien boksmatches en vier bands die elkaar afwisselen in samenwerking met het Bokshuis & de Nederlandse Boksbond.

    */

    return (
        <AbsoluteFullSizeCenterContainer>
            <ResponsiveGridContainer>
                <div className="plane title ffn" onClick={goToSite(eventLink)}>FRIDAY FIGHT NIGHT</div>
                <div className="plane date avenir" onClick={goToSite(eventLink)}>6/9/2024</div>
                <div className="plane tickets ffn" onClick={goToSite(ticketlink)}  >GET TICKETS NOW</div>
                <div className="plane location avenir" onClick={goToSite(eventLink)}>Patronaat Haarlem</div>
                <div className="plane content">
                    <h1 className="hardway">Heavy Music<span className="avenir">,</span> Heavy Matches</h1>
                    <p>Welkom bij de 2e editie van Friday Fight Night! Na een succesvolle eerste editie in de Nobel te Leiden met het NK Superzwaargewicht en optredens van onder andere Dikke Dennis en de Røckers, zijn we terug met een nog spectaculairder evenement. Deze keer kun je genieten van optredens van Hang Youth, Bongloard en meer, wederom gecombineerd met spannende bokswedstrijden.</p>
                    <p>Het concept van Friday Fight Night is simpel: Heavy Music, Heavy Matches. Dit unieke evenement wordt georganiseerd door een samenwerking van Heavy Rock &apos;n Roll-band Goldwölff en het Bokshuis. Mis het niet!</p>
                </div>
                <div className="plane soc instagw" onClick={goToSite(gwinsta)} onMouseEnter={() => setGw(true)} onMouseLeave={() => setGw(false)} ><FontAwesomeIcon icon={lib.faInstagram} spin={gw} /><p>Goldwölff</p></div>
                <div className="plane soc sitegw" onClick={goToSite(gwsite)} onMouseEnter={() => setGw2(true)} onMouseLeave={() => setGw2(false)}><FontAwesomeIcon icon={lib2.faGlobe} spin={gw2} /><p>Goldwölff</p></div>
                <div className="plane soc sitebh" onClick={goToSite(bhsite)} onMouseEnter={() => setBh2(true)} onMouseLeave={() => setBh2(false)}><FontAwesomeIcon icon={lib2.faGlobe} spin={bh2} /><p>Bokshuis</p></div>
                <div className="plane soc instabh" onClick={goToSite(bhinsta)} onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)} ><FontAwesomeIcon icon={lib.faInstagram} spin={bh} /><p>Bokshuis</p></div>
            </ResponsiveGridContainer>
            <style jsx>{`

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
                    animation: sizeMorph 40s infinite alternate linear;
                    transition: all 500ms;
                }
                .title:hover {
                    background-color: ${colors.secondary}99;
                    background-image: radial-gradient(circle at center center, ${colors.secondary}99, ${colors.tertiary}99), repeating-radial-gradient(circle at center center, ${colors.tertiary}, ${colors.primary}, 10px, transparent 18%, transparent 10px);
                    color: ${colors.secondaryText};
                    font-size: 2em;
                    cursor: pointer;
                }

                
                .date {
                    grid-area: date;
                    font-size: 20px;
                    transition: all 500ms;
                }

                .tickets {
                    grid-area: tickets;
                    background: ${colors.secondary}99;
                    background-image: linear-gradient(217deg, ${colors.primary}66, ${colors.secondary}99);
                    color: ${colors.secondaryText};
                    font-size: 20px;
                    font-weight: 800;
                    transition: all 500ms;
                }


                .tickets:hover {
                    grid-area: tickets;
                    background: ${colors.tertiary}99;
                    color: ${colors.tertiaryText};
                    font-size: 22px;
                    cursor: pointer;
                }
                .location {
                    grid-area: location;
                    font-size: 20px;
                    transition: all 500ms;
                }
                .content {
                    grid-area: content;
                    background-image: radial-gradient(circle at 100%, ${colors.background}88, ${colors.backgroundDark}FF);
                    padding: 15px 15px;
                    text-align: justify;
                    flex-direction: column;
                    gap: 15px;

                }

                .content > h1 {
                    font-size: 10px;
                    margin: 6px 0 -15px 0;
                    align-self: baseline;
                    color: ${colors.secondary};
                    text-shadow: 1px 1px 7px ${colors.backgroundDark};
                }


                .soc {
                    font-family: "Avenir";
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

                .date:hover, .location:hover {
                    background: ${colors.tertiary}99;
                    color: ${colors.tertiaryText};
                    cursor: pointer;
                    font-size: 22px;
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

                    
                `}
            </style>
            <style jsx global> {`
                .cc-small > .soc {
                    background: ${colors.secondary}66;
                    background-image: linear-gradient(217deg, ${colors.backgroundDark}66, ${colors.secondary}66);
                    color: ${colors.secondaryText};
                }

                .cc-big > .tickets {
                    font-size: 20px;
                }

                .cc-big > .title {
                    font-size: 100px;
                }

                .cc-big > .title:hover {
                    background-color: ${colors.tertiary}99;
                    background-image: radial-gradient(circle at center center, ${colors.tertiary}99, ${colors.primary}99), repeating-radial-gradient(circle at center center, ${colors.primary}, ${colors.secondary}, 10px, transparent 18%, transparent 10px);
                    color: ${colors.tertiaryText};
                    font-size: 110px;
                    cursor: pointer;
                }

                    
                    `}
            </style>
        </AbsoluteFullSizeCenterContainer>
    );
};

export default InformationTiles;