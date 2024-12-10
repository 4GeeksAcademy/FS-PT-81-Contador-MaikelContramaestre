import React from "react";

export const Card = ({ number }) => {
    return (
        <>
            <div className="card card1   text-white m-1 " style={{ width: '7rem', height: '15rem' }}>
                <div className="card-body">
                <span className="color">{number}</span>
                </div>
            </div>
            
        </>

    )

}