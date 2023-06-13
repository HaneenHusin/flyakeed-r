import BookFlights from "./components/BookFlights";
import Testimonials from "./components/Testimonials";
import Companies from "./components/Companies";
import TravelExperience from "./components/TravelExperience.js";
import BookSection from "./components/BookSection";
import React from 'react';

function HomePage() {
    return (
        <div>
            <BookSection />
            <TravelExperience />

            <Companies />
            <Testimonials/>
            <BookFlights/>
            <div className="h-30remrem"></div>
        </div>


    );
}

export default HomePage;