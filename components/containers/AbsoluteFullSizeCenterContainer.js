import React from "react";

const AbsoluteFullSizeCenterContainer = ({ children }) => {
    return (
        <div className="absolute-fullsize-center-container">
            {children}
            <style jsx>{`
                .absolute-fullsize-center-container {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                }
                `}</style>
        </div>
    );
};

export default AbsoluteFullSizeCenterContainer;