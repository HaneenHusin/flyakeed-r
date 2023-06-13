import {Image} from 'primereact/image';
import {useState,useEffect} from 'react';
import {Card} from 'primereact/card';
import {Calendar} from 'primereact/calendar';
import {Button} from 'primereact/button';
import {Divider} from 'primereact/divider';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {AutoComplete} from "primereact/autocomplete";
// import {searchFlightOffers} from "../api/service ";
import React from 'react';
function TripType({
                      selectedOneway,
                      selectedRoundtrip,
                      selectedMultiCity,
                      setSelectedOneway,
                      setSelectedRoundtrip,
                      setSelectedMultiCity,
                      setMultiCitySelected,
                      setFlightSelected
                  }) {
    return (
        <div className="flex flex-wrap justify-content-center gap-3 border-round-md bg-white mt-5">
            <Button label="Oneway" text className={selectedOneway ? 'p-button-secondary bg-primary' : ''}
                    onClick={() => {
                        setSelectedOneway(true);
                        setSelectedRoundtrip(false);
                        setSelectedMultiCity(false);
                        setMultiCitySelected(false)
                    }}/>
            <Divider layout="vertical"/>
            <Button label="Roundtrip" text className={selectedRoundtrip ? 'p-button-secondary bg-primary' : ''}
                    onClick={() => {
                        setSelectedOneway(false);
                        setSelectedRoundtrip(true);
                        setSelectedMultiCity(false);
                        setMultiCitySelected(false)
                    }}/>
            <Divider layout="vertical"/>
            <Button label="Multi_City" text className={selectedMultiCity ? 'p-button-secondary bg-primary' : ''}
                    onClick={() => {
                        setSelectedOneway(false);
                        setSelectedRoundtrip(false);
                        setSelectedMultiCity(true);
                        setMultiCitySelected(true)
                    }}/>
        </div>
    );
}

export function TripDate({departuredate, setDepartureDate, returnDate, setReturnDate}) {
    return (
        <div className="grid mt-4">
            <Card className="col m-1">
                <span className="app-text text-blue-500">Departure Date</span>
                <div className="grid p-2 ">
                    <span className="footer-text-header text-4xl">19</span>
                    <div className="col">
                        <span className="app-text px-4">June 2023</span>
                    </div>

                </div>

                <Calendar value={departuredate} onChange={(e) => setDepartureDate(e.value)}/>


            </Card>
            <Card className="col m-1 surface-ground">
                <span className="app-text text-blue-500">Return Date</span>
                <div className="grid p-2 ">
                    <span className="footer-text-header text-4xl">19</span>
                    <div className="col">
                        <span className="app-text px-4">June 2023</span>
                    </div>

                </div>

                <Calendar value={returnDate} onChange={(e) => setReturnDate(e.value)}/>

            </Card>
        </div>
    );
}

export function TripData({valueAdult, setValueAdult, valueChild, setValueChild, valueInfant, setValueInfant}) {
    return (
        <div className="flex flex-wrap justify-content-center gap-3 border-round-md bg-white mt-3 shadow-4 ">

            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Adult</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueAdult}
                                 onValueChange={(e) => setValueAdult(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem'}} min={0}/>
                </div>
            </div>
            <Divider layout="vertical" className="px-4"/>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Child</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueChild}
                                 onValueChange={(e) => setValueChild(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem', height: '2rem'}} min={0}/>
                </div>
            </div>
            <Divider layout="vertical" className="px-4"/>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Infant</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueInfant}
                                 onValueChange={(e) => setValueInfant(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem'}} min={0}/>
                </div>
            </div>

        </div>
    );
}

export function HotelDate({checkInDate, setCheckInDate, checkOutDate, setCheckOutDate}) {
    return (
        <div className="grid mt-4">
            <Card className="col m-1">
                <span className="app-text text-blue-500">Check In</span>
                <div className="grid p-2 ">
                    <span className="footer-text-header text-4xl">19</span>
                    <div className="col">
                        <span className="app-text px-4">June 2023</span>
                    </div>

                </div>

                <Calendar value={checkInDate} onChange={(e) => setCheckInDate(e.value)}/>


            </Card>
            <Card className="col m-1 surface-ground">
                <span className="app-text text-blue-500">Check out</span>
                <div className="grid p-2 ">
                    <span className="footer-text-header text-4xl">19</span>
                    <div className="col">
                        <span className="app-text px-4">June 2023</span>
                    </div>

                </div>

                <Calendar value={checkOutDate} onChange={(e) => setCheckOutDate(e.value)}/>

            </Card>
        </div>
    );
}

export function HotelData({
                              valueAdultHotel,
                              setValueAdultHotel,
                              valueChildHotel,
                              setValueChildHotel,
                              valueRooms,
                              setValueRooms
                          }) {
    return (
        <div className="flex flex-wrap justify-content-center gap-3 border-round-md bg-white mt-4 shadow-4 ">

            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Rooms</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueRooms}
                                 onValueChange={(e) => setValueRooms(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem'}} min={0}/>
                </div>
            </div>
            <Divider layout="vertical" className="px-4"/>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Adult(12+ yrs)</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueAdultHotel}
                                 onValueChange={(e) => setValueAdultHotel(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem', height: '2rem'}} min={0}/>
                </div>
            </div>
            <Divider layout="vertical" className="px-4"/>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="app-text text-blue-500 pt-2">Child (0-11 yrs)</span>
                <div className="col">
                    <InputNumber inputId="stacked-buttons" value={valueChildHotel}
                                 onValueChange={(e) => setValueChildHotel(e.value)} showButtons buttonLayout="vertical"
                                 style={{width: '4rem'}} min={0}/>
                </div>
            </div>

        </div>
    );
}

export function TripCategory({
                                 selectedEcon,
                                 setSelectedEcon,
                                 selectedBusiness,
                                 setSelectedBusiness,
                                 selectedClass,
                                 setSelectedClass
                             }) {
    return (

        <div className="flex flex-wrap justify-content-center gap-3 border-round-md bg-white mt-4 shadow-4 ">
            <Button label="Econ" text className={selectedEcon ? 'p-button-secondary bg-primary' : ''} onClick={() => {
                setSelectedBusiness(false);
                setSelectedClass(false);
                setSelectedEcon(true);
            }}/>
            <Divider layout="vertical"/>
            <Button label="Business" text className={selectedBusiness ? 'p-button-secondary bg-primary' : ''}
                    onClick={() => {
                        setSelectedBusiness(true);
                        setSelectedClass(false);
                        setSelectedEcon(false);
                    }}/>
            <Divider layout="vertical" className=""/>
            <Button label="First Class" text className={selectedClass ? 'p-button-secondary bg-primary' : ''}
                    onClick={() => {
                        setSelectedBusiness(false);
                        setSelectedClass(true);
                        setSelectedEcon(false);
                    }}/>
        </div>


    );
}

export function TripPlaces({fromValue, setFromValue, toValue, setToValue}) {
    return (
        <div className=" flex-wrap shadow-4 border-round-md bg-white mt-2 p-2">
            <div>
                <i className="pi pi-arrow-down px-2" style={{color: '#cb538d'}}> From</i>
                <InputText value={fromValue} onChange={(e) => setFromValue(e.target.value)}/>
            </div>
            <Divider className="p-0 m-0" align="right"> <Button icon="pi pi-sort-alt"
                                                                className="p-button-outlined"></Button></Divider>
            <div>
                <i className="pi pi-arrow-up px-3" style={{color: '#cb538d'}}> To </i>
                <InputText value={toValue} onChange={(e) => setToValue(e.target.value)}/>
            </div>
        </div>
    )


}

export function CityOrHotel({cityOrHotelValue, setCityOrHotelValue}) {
    const [items, setItems] = useState([]);
    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <div className=" flex-wrap shadow-4 border-round-md bg-white mt-2 p-2">
            <div className="col"><span className="app-text text-blue-500 p-2">City or Hotel ?</span></div>
            <div className="col">

                <AutoComplete value={cityOrHotelValue} suggestions={items} placeholder="Where are you going?"
                              completeMethod={search} onChange={(e) => setCityOrHotelValue(e.value)} dropdown/>
            </div>
        </div>
    )
}

function BookSection() {
    const [selectedCard, setSelectedCard] = useState('flight');
    // const [selectedCard2, setSelectedCard2] = useState('oneWay');
    const [ddate, setDDate] = useState(null);
    const [rdate, setRDate] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [valueAdult, setValueAdult] = useState(1);
    const [valueChild, setValueChild] = useState(1);
    const [valueInfant, setValueInfant] = useState(1);
    const [selectedEcon, setSelectedEcon] = useState(true);
    const [selectedBusiness, setSelectedBusiness] = useState(false);
    const [selectedClass, setSelectedClass] = useState(false);
    const [selectedOneway, setSelectedOneway] = useState(true);
    const [selectedRoundtrip, setSelectedRoundtrip] = useState(false);
    const [selectedMultiCity, setSelectedMultiCity] = useState(false);
    const [flightSelected, setFlightSelected] = useState(true);
    const [hotelSelected, setHotelSelected] = useState(false);
    const [multiCitySelected, setMultiCitySelected] = useState(false);
    const [cityOrHotelValue, setCityOrHotelValue] = useState('');
    const [valueRooms, setValueRooms] = useState(1);
    const [valueChildHotel, setValueChildHotel] = useState(1);
    const [valueAdultHotel, setValueAdultHotel] = useState(1);
    const [numCards, setNumCards] = useState(1);

    const addCard = () => {
        setNumCards(numCards + 1);
    };
    const handleCardClick = (card) => {
        setSelectedCard(card);
        if (card === 'flight') {
            setFlightSelected(true)
            setHotelSelected(false)
        } else {
            setFlightSelected(false)
            setHotelSelected(true)
        }
    };

    const cardClassName = (card) => {
        if (selectedCard === card) {
            return 'bg-primary border-round-left-xl border-round-right-xl w-6 h-2rem justify-content-center text-white-alpha-80';
        } else {
            return 'border-round-3xl';
        }

    };


    const title = (

        <div className="grid justify-content-between">

            <div style={{display: 'flex', alignItems: 'center'}}
                 className={`w-5 h-2rem border-transparent ${cardClassName('flight')}`}
                 onClick={() => handleCardClick('flight')}>
                <Image src="/book.png" alt="book" height="auto"/>
                <span
                    className={`px-2 text-lg font-medium text-500  ${selectedCard === 'flight' ? 'text-white' : ''}`}>flight</span>
            </div>

            <div style={{display: 'flex', alignItems: 'center'}}
                 className={`w-5 h-2rem border-transparent ${cardClassName('hotel')}`}
                 onClick={() => handleCardClick('hotel')}>
                <Image src="/hotels.png" alt="hotels" height="auto"/>
                <span
                    className={`px-2 text-lg font-medium text-500  ${selectedCard === 'hotel' ? 'text-white' : ''}`}>Hotels</span>
            </div>
        </div>


    );
    useEffect(() => {
        debugger

       // searchFlightOffers(ddate, rdate, valueAdult, valueChild, valueInfant, selectedEcon, selectedBusiness, selectedClass, selectedOneway, selectedRoundtrip, selectedMultiCity);

    }, []);
    return (
        <div>
            {flightSelected &&
                <div className="grid grid-nogutter  fadeinleft animation-duration-1000"
                     style={{background: '#e8efff', height: '760px'}}>
                    <div className="col-6" style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: '15px'}} className="imgB1">
                            <Card title={title} className="border-round-3xl w-8 h-3rem  border-3 border-50 pb-6">
                            </Card>
                        </div>

                        <div className="imgB1 w-8 px-2">
                            <TripType selectedOneway={selectedOneway} setSelectedOneway={setSelectedOneway}
                                      selectedRoundtrip={selectedRoundtrip} setSelectedRoundtrip={setSelectedRoundtrip}
                                      selectedMultiCity={selectedMultiCity} setSelectedMultiCity={setSelectedMultiCity}
                                      setMultiCitySelected={setMultiCitySelected}
                                      setFlightSelected={setFlightSelected}/>
                        </div>
                        {(multiCitySelected) && <div className="imgB1 w-8  bg-transparent">
                            {Array.from({length: numCards}, (_, i) => (
                                <div key={i} style={{padding: '15px'}} className="imgB1 w-8  ">

                                    {/*<div*/}
                                    {/*    className="flex flex-wrap justify-content-center gap-3 border-round-md  bg-white mt-2">*/}
                                    {/*    <span className="app-text text-blue-500 pt-2">From</span>*/}
                                    {/*    <Divider layout="vertical"/>*/}
                                    {/*    <span className="app-text text-blue-500 pt-2">To</span>*/}
                                    {/*    <Divider layout="vertical"/>*/}
                                    {/*    <span className="app-text text-blue-500 pt-2">Date</span>*/}

                                    {/*</div>*/}
                                    <div className="flex flex-wrap justify-content-center gap-3 border-round-md bg-white mt-4 shadow-4 ">
                                        <div className="grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <span className="app-text text-blue-500 pt-2">From</span>
                                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                                <InputText type="text" className="p-inputtext-sm w-3" placeholder="Small" />
                                            </div>
                                        </div>
                                        <Divider layout="vertical" className="px-4" />
                                        <div className="grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <span className="app-text text-blue-500 pt-2">To</span>
                                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                                <InputText type="text" className="p-inputtext-sm w-3" placeholder="Small" />
                                            </div>
                                        </div>
                                        <Divider layout="vertical" className="px-4" />
                                        <div className="grid" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <span className="app-text text-blue-500 pt-2">Date</span>
                                            <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                                <InputText type="text" className="p-inputtext-sm w-3" placeholder="Small" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Button label="Add Flight" icon="pi pi-spin pi-plus-circle" onClick={addCard}
                                    className="w-8 px-3 m-3 imgB1"/>
                        </div>}
                        {(!multiCitySelected) && <div className="imgB1 w-8 px-2 ">
                            <TripPlaces/>
                        </div>}
                        {(!multiCitySelected) && <div className="imgB1 w-8 px-2">
                            <TripDate departuredate={ddate} setDepartureDate={setDDate} returnDate={rdate}
                                      setReturnDate={setRDate}/>
                        </div>}
                        <div className="imgB1 w-8 px-2 ">
                            <TripData valueAdult={valueAdult}
                                      setValueAdult={setValueAdult}
                                      valueChild={valueChild}
                                      setValueChild={setValueChild}
                                      valueInfant={valueInfant}
                                      setValueInfant={setValueInfant}/>
                        </div>
                        <div className="imgB1 w-8 px-2 ">
                            <TripCategory selectedEcon={selectedEcon} setSelectedEcon={setSelectedEcon}
                                          selectedBusiness={selectedBusiness} setSelectedBusiness={setSelectedBusiness}
                                          selectedClass={selectedClass} setSelectedClass={setSelectedClass}/>
                        </div>

                        <Button label="search" className='w-8 px-3 m-3 imgB1'/>

                        <Image src="/traveller.jpg" alt="jpg" style={{marginLeft: '1rem'}}
                               className="imgA1 travel-img"/>
                    </div>
                </div>

            }
            {hotelSelected &&
                <div className="grid grid-nogutter  fadeinleft animation-duration-1000"
                     style={{background: '#e8efff', height: '760px'}}>
                    <div className="col-6" style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: '15px'}} className="imgB1">
                            <Card title={title} className="border-round-3xl w-8 h-3rem  border-3 border-50 pb-6">
                            </Card>
                        </div>
                        <div className="imgB1 w-8 px-2">
                            <CityOrHotel cityOrHotelValue={cityOrHotelValue} setCityOrHotelValue={setCityOrHotelValue}/>
                        </div>
                        <div className="imgB1 w-8 px-2">
                            <HotelDate checkInDate={checkInDate} setCheckInDate={setCheckInDate}
                                       checkOutDate={checkOutDate} setCheckOutDate={setCheckOutDate}/>
                        </div>
                        <div className="imgB1 w-8 px-2">
                            <HotelData valueAdultHotel={valueAdultHotel}
                                       setValueAdultHotel={setValueAdultHotel}
                                       valueChildHotel={valueChildHotel}
                                       setValueChildHotel={setValueChildHotel}
                                       valueRooms={valueRooms}
                                       setValueRooms={setValueRooms}/>
                        </div>
                        <Button label="search Hotels" className='w-8 px-3 m-2 imgB1'/>

                    </div>
                </div>
            }

        </div>
    );
}

export default BookSection;