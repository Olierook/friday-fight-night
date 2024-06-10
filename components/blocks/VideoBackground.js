

const VideoBackground = ({ url }) => {
 

    return (
        <video  
            preload="auto" 
            autoPlay
            loop
            playsInline
            muted
        >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
            <style jsx>{`
                video {
                    width: auto;
                    height: 100%;
                    margin: 0;
                }
                `}</style>
        </video>
    );
};

export default VideoBackground;