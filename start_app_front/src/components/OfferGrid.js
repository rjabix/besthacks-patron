import OfferTile from "../offer_tile";
import sample from "../sample.svg";
import React from "react";
import axios from "axios";

export default function OfferGrid({ prompt }) {
    const [offers, setOffers] = React.useState([]);
    React.useEffect(() => {
        axios.post('https://78d9-156-17-72-59.ngrok-free.app/api/ai/searchjobs', { prompt: prompt })
            .then((response) => {
                console.log(response.data);
                setOffers(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [prompt]);

    React.useLayoutEffect(() => {
        document.getElementById('offer-grid')?.scrollIntoView({ behavior: 'smooth' });
    });
    console.log(offers)
    return (
        <div id='offer-grid' className=" grid grid-cols-3 p-12 gap-x-12" style={{
            overflowY: 'auto'
        }}>
            {offers.map((offer, index) => (
                <OfferTile
                    id={offer.id} key={offer.id}
                    pic={sample}
                    jobCompany={offer.company}
                    jobTitle={offer.title}
                    jobDescription={offer.requirements}
                    link_var={offer.link}
                    onElaborateClick={() => {
                        console.log("Elaborate clicked")
                    }}
                />
            ))}
        </div>
    );
}