import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";


const VideoBackground = ({ url }) => {
    const {width, height} = useWindowDimensions();
    const [bigScreen, setBigScreen] = useState(false);
    const videoRef= useRef();

    const videoRatio = 1280 / 720;
    const screenRatio = width / height;

    const putBigScreen = () => {
        if (screenRatio > videoRatio) {
            setBigScreen(true);
        } else {
            setBigScreen(false);
        }
            
    };
    
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.65;
    };

    useEffect(() => {
        if (videoRef.current) {
            setPlayBack();
        }
    }, [videoRef]);

    useEffect(() => {
        putBigScreen();
    }, [screenRatio]);

    return (
        <video  
            ref={videoRef}
            preload="auto" 
            autoPlay
            loop
            playsInline
            muted
            onCanPlay={setPlayBack}
        >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
            <style jsx>{`
                video {
                    width: ${bigScreen ? "100%" : "auto"};
                    height: ${bigScreen ? "auto" : "100%"};
                    margin: 0;
                }
                `}</style>
        </video>
    );
};

export default VideoBackground;