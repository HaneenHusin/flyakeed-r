
import {Image} from "primereact/image";
import React from 'react';
function Testimonials() {
    return (

        <div className="align-content-center pt-7 fadeinleft animation-duration-1000">
            <span
                className="book-flights m-6">Testimonials</span>

            <div className="grid ml-8">
                <div className="chat col-3 m-4 ml-8 wrapper">
                    <p className="px-2">FlyAkeed made my life easier. We used to work with agents in the past but with FlyAkeed, I can
                        get notified with requests with approval instead of waiting 1-2 days for confirmation that they
                        can travel.</p>
                    <Image src="/blockquote.PNG" alt="payment" style={{color: '#2ecc71', fontSize: '2rem', marginRight: '10px'}}></Image>
                    </div>
                <div className="col-3 chat m-4">

                    <p className="px-2">In the past, everything was done by papers and we had to contact agents through email. The
                        process used to take too long and there was no way to monitor, but with FlyAkeed, everything is
                        seamless and transparent</p>
                    <Image src="/blockquote.PNG" alt="payment" style={{color: '#2ecc71', fontSize: '2rem', marginRight: '10px'}}></Image>

                </div>
                <div className="col-3 chat m-4">

                    <p className="px-2">As a company, one of the important features we want is having a dashboard to monitor all flights
                        and seeing their costs and times</p>
                    <Image src="/blockquote.PNG" alt="payment" style={{color: '#2ecc71', fontSize: '2rem', marginRight: '10px'}}></Image>

                </div>



            </div>
        </div>

    );
}

export default Testimonials;