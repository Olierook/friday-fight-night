

const VideoBackground = ({ url }) => {
 

    return (
        <video  
            preload="auto" 
            autoPlay
            loop
            muted
            style={{
                width: "auto",
                height: "100%",
            }}
        >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoBackground;