import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const useIsBroaderRatio = ratio => {
    const { width, height } = useWindowDimensions();
    const [bigScreen, setBigScreen] = useState(false);

    const [thisWidth, thisHeight] = ratio.split(":");
    const videoRatioNumber = thisWidth / thisHeight;
    const screenRatio = width / height;

    const putBigScreen = () => {
        if (screenRatio > videoRatioNumber) {
            setBigScreen(true);
        } else {
            setBigScreen(false);
        }

    };

    useEffect(() => {
        putBigScreen();
    }, [screenRatio]);
    return bigScreen;
};
export default useIsBroaderRatio;