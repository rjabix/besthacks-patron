import OfferTile from "../offer_tile";
import sample from "../sample.svg";
import React from "react";

export default function OfferGrid({offers}) {
    return (<div className=" grid grid-cols-3 p-12 gap-x-12" style={{
            overflowY: 'auto'
        }}>
            <OfferTile pic={sample}
                       jobTitle="Software Developer and not it is a very long title that should be truncated"
                       jobRequirements={[
                           "Bachelor's degree in Computer Science",
                           "3+ years of experience in software development",
                           "Experience with Java, Python, and C++"
                       ]}
                       onElaborateClick={() => {
                           console.log("Elaborate clicked")
                       }}
                       noViewClick={() => {
                           console.log("View clicked")
                       }}
            />
            {/* Add more OfferTile components as needed */}
        </div>
    );
}