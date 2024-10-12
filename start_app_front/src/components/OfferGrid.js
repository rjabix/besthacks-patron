import OfferTile from "../offer_tile";
import sample from "../sample.svg";
import React from "react";
import axios from "axios";

export default function OfferGrid({ prompt }) {
    const [offers, setOffers] = React.useState([]);
    React.useEffect(() => {
        axios.post('http://localhost:5094/api/ai/searchjobs', {
            prompt: prompt,
        }).then((response) => {
            setOffers(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [prompt]);

    React.useLayoutEffect(() => {
        document.getElementById('offer-grid')?.scrollIntoView({behavior: 'smooth'});
    });

    return (
        <div id='offer-grid' className=" grid grid-cols-3 p-12 gap-x-12" style={{
            overflowY: 'auto'
        }}>
            {offers.map((offer, index) => (
                <OfferTile pic={sample}
                           jobTitle={offer.title}
                           jobRequirements={[
                               "Requirement 1",
                               "Requirement 2",
                               "Requirement 3",
                               "Requirement 4",
                               "Requirement 5",
                           ]}
                           link_var={offer.link}
                           onElaborateClick={() => {
                               console.log("Elaborate clicked")
                           }}
                />
            ))}
        </div>
    );
}