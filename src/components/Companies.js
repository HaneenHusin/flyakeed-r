import {Image} from 'primereact/image';
import React from 'react';
function Companies() {
    return (

        <div className="align-content-center fadeinleft animation-duration-1000">
            <span
                className="companies-text m-6">Join the Elite Ranks of the Most Impressive Companies Trusting Us</span>


            <div className="grid">

                <div className="col">

                    <Image src="/alibab_cloud.PNG" alt="payment" width="150" height="100"></Image>
                    <Image src="/OM.PNG" alt="payment" width="150" height="100"></Image>
                    <Image src="/stc_group.PNG" alt="payment" width="150" height="100"></Image>
                    <Image src="/NEOM.PNG" alt="payment" width="150" height="100"></Image>
                    <Image src="/jock_club.PNG" alt="payment" width="150" height="100"></Image>
                    <Image src="/Knowliom.PNG" alt="payment" width="150" height="100"></Image>
                </div>


            </div>
        </div>

    );
}

export default Companies;