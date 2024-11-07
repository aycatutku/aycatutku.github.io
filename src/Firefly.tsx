import React from "react";

const Firefly: React.FC = () => {
    return (
        <>
            {
                Array(15).fill(undefined).map((_, index) => (
                    <div key={index} className="firefly"></div>
                ))
            }
        </>
    )
}

export default Firefly;
