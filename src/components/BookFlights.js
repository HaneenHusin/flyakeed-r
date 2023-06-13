import {AppGalleryButton, GooglePlayButton} from "react-mobile-app-button";
import React from 'react';
function BookFlights() {
    return (


        <div className="grid book-flights-div grid-nogutter pt-8 fadeinleft animation-duration-1000">
            <div className="col-6">
                <img src="/flyakeed_landing_phone.svg" alt="SVG"  style={{ marginLeft: '50%'}}/>
            </div>
            <div className="col-6 marginTop">
                <span className="book-flights">Book Flights Anytime, Anywhere with the Convenience of Our Downloadable App</span>
                <div className="grid pt-7">
                    <AppGalleryButton
                        theme={"dark"}
                        className={"custom-style"}
                    />
                    <GooglePlayButton

                        theme={"dark"}
                        className={"custom-style"}
                    />
                </div>

            </div>

        </div>


    );
}

export default BookFlights;
