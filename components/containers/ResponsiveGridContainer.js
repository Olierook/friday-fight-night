import React from "react";
import { useStoreValue } from "../../hooks/data/useStoreValue";


const ResponsiveGridContainer = ({ children }) => {
    const [isSmall] = useStoreValue("isSmall");
    const [isMedium] = useStoreValue("isMedium");
    return (
        <div className={`contentcontainer ${isSmall ? "cc-small" : isMedium ? "cc-medium" : "cc-big"}`}>
            {children}
            <style jsx>{`
            
            .contentcontainer {
                height: 100%;
                width: 100%;
                display: grid;
                gap: 15px;
                margin: auto;

            }
            .cc-small {
                height: initial;
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
                            
            `}</style>
        </div>

    );
};

export default ResponsiveGridContainer;