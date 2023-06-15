
import React from 'react';
import { DataView } from 'primereact/dataview';
import {Card} from "primereact/card";
import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {Image} from "primereact/image";
import { InputText } from "primereact/inputtext";
import {InputNumber} from "primereact/inputnumber";



export default function BasicDemo() {


const  obj ={
    meta: {
        count: 2
    },
    data: [
        {
            type: "flight-offer",
            id: "1",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            lastTicketingDateTime: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT15H5M",
                    segments: [
                        {
                            departure: {
                                iataCode: "SYD",
                                terminal: "1",
                                at: "2023-06-15T22:10:00"
                            },
                            arrival: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-16T05:00:00"
                            },
                            carrierCode: "MH",
                            number: "140",
                            aircraft: {
                                code: "333"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT8H50M",
                            id: "1",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        },
                        {
                            departure: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-16T09:00:00"
                            },
                            arrival: {
                                iataCode: "BKK",
                                at: "2023-06-16T10:15:00"
                            },
                            carrierCode: "MH",
                            number: "784",
                            aircraft: {
                                code: "738"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT2H15M",
                            id: "2",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        }
                    ]
                },
                {
                    duration: "PT18H15M",
                    segments: [
                        {
                            departure: {
                                iataCode: "SYD",
                                terminal: "1",
                                at: "2023-06-29T22:10:00"
                            },
                            arrival: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-30T05:00:00"
                            },
                            carrierCode: "MH",
                            number: "140",
                            aircraft: {
                                code: "333"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT8H50M",
                            id: "3",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        },
                        {
                            departure: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-30T12:10:00"
                            },
                            arrival: {
                                iataCode: "BKK",
                                at: "2023-06-30T13:25:00"
                            },
                            carrierCode: "MH",
                            number: "788",
                            aircraft: {
                                code: "738"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT2H15M",
                            id: "4",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        }
                    ]
                }
            ],
            price: {
                currency: "USD",
                total: "11440.00",
                base: "10572.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER"
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING"
                    }
                ],
                grandTotal: "11440.00"
            },
            pricingOptions: {
                fareType: [
                    "PUBLISHED"
                ],
                includedCheckedBagsOnly: false
            },
            validatingAirlineCodes: [
                "MH"
            ],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "2",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "3",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "4",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "5",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "6",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "7",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "8",
                    fareOption: "STANDARD",
                    travelerType: "SEATED_INFANT",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "3",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "4",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                }
            ]
        },
        {
            type: "flight-offer",
            id: "2",
            source: "GDS",
            instantTicketingRequired: false,
            nonHomogeneous: false,
            oneWay: false,
            lastTicketingDate: "2023-06-15",
            lastTicketingDateTime: "2023-06-15",
            numberOfBookableSeats: 9,
            itineraries: [
                {
                    duration: "PT15H5M",
                    segments: [
                        {
                            departure: {
                                iataCode: "SYD",
                                terminal: "1",
                                at: "2023-06-15T22:10:00"
                            },
                            arrival: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-16T05:00:00"
                            },
                            carrierCode: "MH",
                            number: "140",
                            aircraft: {
                                code: "333"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT8H50M",
                            id: "1",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        },
                        {
                            departure: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-16T09:00:00"
                            },
                            arrival: {
                                iataCode: "BKK",
                                at: "2023-06-16T10:15:00"
                            },
                            carrierCode: "MH",
                            number: "784",
                            aircraft: {
                                code: "738"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT2H15M",
                            id: "2",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        }
                    ]
                },
                {
                    duration: "PT19H20M",
                    segments: [
                        {
                            departure: {
                                iataCode: "SYD",
                                terminal: "1",
                                at: "2023-06-29T22:10:00"
                            },
                            arrival: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-30T05:00:00"
                            },
                            carrierCode: "MH",
                            number: "140",
                            aircraft: {
                                code: "333"
                            },
                            operating: {
                                carrierCode: "MH"
                            },
                            duration: "PT8H50M",
                            id: "5",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        },
                        {
                            departure: {
                                iataCode: "KUL",
                                terminal: "1",
                                at: "2023-06-30T13:20:00"
                            },
                            arrival: {
                                iataCode: "BKK",
                                at: "2023-06-30T14:30:00"
                            },
                            carrierCode: "MH",
                            number: "5860",
                            aircraft: {
                                code: "788"
                            },
                            operating: {
                                carrierCode: "TG"
                            },
                            duration: "PT2H10M",
                            id: "6",
                            numberOfStops: 0,
                            blacklistedInEU: false
                        }
                    ]
                }
            ],
            price: {
                currency: "USD",
                total: "11440.00",
                base: "10572.00",
                fees: [
                    {
                        amount: "0.00",
                        type: "SUPPLIER"
                    },
                    {
                        amount: "0.00",
                        type: "TICKETING"
                    }
                ],
                grandTotal: "11440.00"
            },
            pricingOptions: {
                fareType: [
                    "PUBLISHED"
                ],
                includedCheckedBagsOnly: false
            },
            validatingAirlineCodes: [
                "MH"
            ],
            travelerPricings: [
                {
                    travelerId: "1",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "2",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "3",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "4",
                    fareOption: "STANDARD",
                    travelerType: "ADULT",
                    price: {
                        currency: "USD",
                        total: "1658.00",
                        base: "1509.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAU",
                            brandedFare: "FLEX",
                            class: "M",
                            includedCheckedBags: {
                                weight: 35,
                                weightUnit: "KG"
                            }
                        }
                    ]
                },
                {
                    travelerId: "5",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "6",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "7",
                    fareOption: "STANDARD",
                    travelerType: "CHILD",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                },
                {
                    travelerId: "8",
                    fareOption: "STANDARD",
                    travelerType: "SEATED_INFANT",
                    price: {
                        currency: "USD",
                        total: "1202.00",
                        base: "1134.00"
                    },
                    fareDetailsBySegment: [
                        {
                            segmentId: "1",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "2",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "5",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        },
                        {
                            segmentId: "6",
                            cabin: "ECONOMY",
                            fareBasis: "MFLOWAUCH",
                            brandedFare: "FLEX",
                            class: "M"
                        }
                    ]
                }
            ]
        }
    ],
    dictionaries: {
        locations: {
            KUL: {
                cityCode: "KUL",
                countryCode: "MY"
            },
            BKK: {
                cityCode: "BKK",
                countryCode: "TH"
            },
            SYD: {
                cityCode: "SYD",
                countryCode: "AU"
            }
        },
        aircraft: {
            333: "AIRBUS A330-300",
            738: "BOEING 737-800",
            788: "BOEING 787-8"
        },
        currencies: {
            USD: "US DOLLAR"
        },
        carriers: {
            TG: "THAI AIRWAYS INTERNATIONAL",
            MH: "MALAYSIA AIRLINES"
        }
    }
}
    const startContent = (
        <React.Fragment>
            <div className="grid" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span className="footer-text-header text-white text-xl pt-2"> {obj.data[0].itineraries[0].segments[0].departure.iataCode} -> {obj.data[0].itineraries[0].segments[0].arrival.iataCode}     </span>
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
        