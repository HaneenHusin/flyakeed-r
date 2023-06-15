
import React from 'react';
import { DataView } from 'primereact/dataview';
import {Card} from "primereact/card";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";

import {useLocation} from 'react-router-dom'



export default function BasicDemo() {

    const location = useLocation();
    const obj = location.state;


    const startContent = (
        <React.Fragment>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="footer-text-header text-white text-xl pt-2"> {obj.data[0].itineraries[0].segments[0].departure.iataCode} -- {obj.data[0].itineraries[0].segments[0].arrival.iataCode}     </span>
                <div className="col">
                    <span className="footer-text-header text-blue-500 pt-2">{obj.data.reduce((acc, curr) => {
                        return acc + curr.travelerPricings.filter(
                            traveler => traveler.travelerType === "ADULT"
                        ).length;
                    }, 0)} Adults {obj.data[0].travelerPricings[0].fareDetailsBySegment[0].cabin}</span>
                </div>
            </div>
          </React.Fragment>
    );
    const centerContent = (
        <React.Fragment className="fadeoutright   animation-duration-3000">
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="footer-text-header text-white text-xl pt-2"> {obj.data[0].itineraries[0].segments[0].departure.at.split("T")[0]}</span>
                <div className="col">
                    <span className="footer-text-header text-blue-500 pt-2">Return</span>
                </div>
            </div>
            <div className="grid px-8" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="footer-text-header text-white text-xl pt-2">{obj.data[0].itineraries[1].segments[0].departure.at.split("T")[0]}</span>
                <div className="col">
                    <span className="footer-text-header text-blue-500 pt-2">Departure</span>
                </div>
            </div>
        </React.Fragment>
    );
    const endContent = (
        <React.Fragment>

            <Button label="change search" style={{background: '#0e1254', color: '#ffffff'}}/>
        </React.Fragment>
    );
    const itemTemplate = (obj) => {
        return (
            <div className="col-12 bg-blue-100">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4  ">
                <Card className=" border-noround-left w-8">
                    Card 1 Content
                    {obj.itineraries.map(itinerary => (
                        <div key={itinerary.id}>
                            Duration: {itinerary.duration} <br />
                            Departure: {itinerary.segments[0].departure.iataCode} <br />
                            Arrival: {itinerary.segments[0].arrival.iataCode}
                        </div>
                    ))}
                </Card>

                <Card className="border-noround-right">

                    <Button label="select" className="mr-2" style={{background: '#196dfb', marginRight: '10px'}}/>
                </Card>
    </div>
            </div>
        );
    };

    return (
        <div className="">
            <Toolbar className="h-6rem" pt={{root: {style: {background: '#0d126c'}}}} start={startContent}
                     center={centerContent} end={endContent} />

            <DataView value={obj.data} itemTemplate={itemTemplate} />
        </div>
    )
}
