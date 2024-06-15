import { Suspense, useRef } from "react";
import useIsBroaderRatio from "../../hooks/screensize/useIsBroaderRatio";
import useVideoSpeed from "../../hooks/video/useVideoSpeed";


const Loader = ({ children }) => (
    <div className="videocontainer">
        <Suspense fallback={<p>Loading video...</p>}>
            {children}
        </Suspense>
        <style jsx>{`
                .videocontainer {
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    display: flex; 
                    justify-content: center; 
                    align-items: center;
                }
                `}</style>
    </div>
);


const VideoBackground = ({ url, playbackRate = 0.65, type = "video/mp4", videoRatio = "1:1", ...props }) => {
    const videoRef = useRef();
    const setSpeed = useVideoSpeed(videoRef, playbackRate);
    const isBroaderRatio = useIsBroaderRatio(videoRatio);

    return (
        <Loader>
            <video
                ref={videoRef}
                onCanPlay={setSpeed}
                {...props}
            >
                <source src={url} type={type} />
                Your browser does not support the video tag.
            </video>
            <style jsx>{`
                video {
                    width: ${isBroaderRatio ? "100%" : "auto"};
                    height: ${isBroaderRatio ? "auto" : "100%"};
                    margin: 0;
                }
                `}</style>
        </Loader>

    );
};

export default VideoBackground;