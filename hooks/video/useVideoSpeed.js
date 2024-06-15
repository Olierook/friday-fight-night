import { useEffect, useRef } from "react";

const useVideoSpeed = (videoRef, playbackRate) => {

    const setPlayBack = () => {
        videoRef.current.playbackRate = playbackRate;
    };

    useEffect(() => {
        if (videoRef.current) {
            setPlayBack();
        }
    }, [videoRef]);

    return setPlayBack;
};

export default useVideoSpeed;