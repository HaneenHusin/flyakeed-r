import React from 'react';
import {Button} from 'primereact/button';
import {Toolbar} from "primereact/toolbar";
import {Image} from 'primereact/image';
import {GooglePlayButton, AppGalleryButton} from "react-mobile-app-button";

function MyBottomNavigationBar() {

    const startContent = (
        <React.Fragment>
            <div className="p-grid p-justify-between">
                <div className="p-col">
                    <Image src="/flyakeed_arabic.PNG" alt="flyakeed_arabic" width="150" height="60"></Image>
                </div>
                <div className="p-col">
                    <Image src="/payment.PNG" alt="payment" width="150" height="60"></Image>
                </div>


            </div>

        </React.Fragment>
    );

    const centerContent = (
        <React.Fragment>
            <div className="p-grid p-justify-between custom-grid-margin">
                <div className="p-col py-1">
                    <span className="footer-text-header">FlyAkeed</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">About Us</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">FlyAkeed for Business</span>
                </div>

            </div>
            <div className="p-grid p-justify-between custom-grid-margin">
                <div className="p-col py-1">
                    <span className="footer-text-header">Support</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">Contact Us</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">FAQ</span>
                </div>

            </div>
            <div className="p-grid p-justify-between custom-grid-margin">
                <div className="p-col py-1">
                    <span className="footer-text-header">Legal</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">Terms and Conditions</span>
                </div>
                <div className="p-col py-1">
                    <span className="footer-text">Privacy Policy</span>
                </div>

            </div>
        </React.Fragment>
    );
    const endContent = (
        <React.Fragment>
            <div className="p-grid p-justify-between">
                <div className="p-col">
                    <span className="footer-text-header">Download</span>
                </div>
                <div className="p-col">

                    <GooglePlayButton

                        theme={"dark"}
                        className={"custom-style"}
                    />
                </div>
                <div className="p-col">
                    <AppGalleryButton
                        theme={"dark"}
                        className={"custom-style"}
                    />
                </div>
            </div>

        </React.Fragment>
    );


    const start = (
        <React.Fragment>
            <span className="footer-text">Call us at: 920000091</span>
        </React.Fragment>
    );

    const center = (
        <React.Fragment>
            <span className="footer-text">FlyAkeed © 2023 | All Rights Reserved</span>
        </React.Fragment>
    );
    const end = (
        <React.Fragment>
            <div className="p-grid p-justify-between">
                <i className="pi pi-instagram mr-4" style={{color: '#9ab2dc'}}></i>
                <i className="pi pi-facebook mr-4" style={{color: '#9ab2dc'}}></i>
                <i className="pi  pi-twitter mr-4" style={{color: '#9ab2dc'}}></i>
                <Button label="AkeedCare" className="mr-2" icon="pi  pi-calendar-minus"
                        style={{background: '#196dfb', marginRight: '10px'}}/>


            </div>

        </React.Fragment>
    );


    return (
        <div>
            <Toolbar pt={{root: {style: {background: '#fffff'}}}} start={startContent} center={centerContent}
                     end={endContent}/>
            <Toolbar pt={{root: {style: {background: '#fffff', border: 'none'}}}} start={start} center={center}
                     end={end}/>
        </div>


    );
}

export default MyBottomNavigationBar;