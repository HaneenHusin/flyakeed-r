import BookFlights from "./components/BookFlights";
import Testimonials from "./components/Testimonials";
import Companies from "./components/Companies";
import TravelExperience from "./components/TravelExperience.js";
import FlightsSearch from "./components/FlightsSearch";
import React from 'react';
// import Result from "./components/Result";

function HomePage() {
    return (
        <div>
            {/*<Result />*/}
            <FlightsSearch />
            <TravelExperience />

            <Companies />
            <Testimonials/>
            <BookFlights/>
            <div className="h-30remrem"></div>
        </div>


    );
}

export default HomePage;