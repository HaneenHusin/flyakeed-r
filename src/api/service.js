import axios from "axios";

async function getToken() {
  const response = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      grant_type: "client_credentials",
      client_id: "a9IsGFAvIRcvQQcpR7fyzf6XGrXm7hhd",
      client_secret: "ose0CaCYlsKHCn7g",
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data.access_token;
}
export async function searchFlightOffers(
  departureDate,
  returnDate,
  numAdults,
  numChildren,
  numInfants,
  travelClass,
  tripType,
  cabinClass
) {
  try {
    const accessToken = await getToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    const params = {
      currencyCode: "USD",
      originDestinations: [
        {
          id: "1",
          originLocationCode: "NYC",
          destinationLocationCode: "MAD",
          departureDateTimeRange: {
            date: "2023-11-01",
            time: "10:00:00",
          },
        },
      ],
      travelers: [
        {
          id: "1",
          travelerType: "ADULT",
        },
      ],
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 2,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: "BUSINESS",
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
        },
      },
    };

    const response = await axios.post(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      params,
      { headers }
    );

    console.log("resssss", response.data);
  } catch (error) {
    console.error(error);
  }
}

// function convertToKeyValue(obj) {
//   return Object.entries(obj).reduce((acc, [key, value]) => {
//     if (typeof value === "object") {
//       if (Array.isArray(value)) {
//         acc[key] = value.map(convertToKeyValue);
//       } else {
//         acc[key] = convertToKeyValue(value);
//       }
//     } else {
//       acc[key] = value;
//     }
//     return acc;
//   }, {});
// }

export async function search(url, params) {
  try {
    const accessToken = await getToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.post(
      `https://test.api.amadeus.com/${url}`,
      params,
      { headers }
    );
    // Return the response data so it can be used by the caller
    return response.status === 200 && response.data.meta.count ? response.data : flightResponse;
  } catch (error) {
    console.error(error);
    return flightResponse;
  }
}

export async function getSearch(url, params) {
  try {
    const accessToken = await getToken();
    console.log("accessToken", accessToken);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(
      `https://test.api.amadeus.com/${url}` + params,
      { headers }
    );
    console.log("resssss", response.data);
    return response.status === 200 ? response.data.data : hotelResponse;
  } catch (error) {
    console.error(error);
  }
}

export async function getAirSearch(event) {
  try {
    const query = event.query;
    const accessToken = await getToken();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const response = await axios.get(
      `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${query}`,
      { headers }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

const flightResponse = {
  meta: {
    count: 2,
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
                at: "2023-06-15T22:10:00",
              },
              arrival: {
                iataCode: "KUL",
                terminal: "1",
                at: "2023-06-16T05:00:00",
              },
              carrierCode: "MH",
              number: "140",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MH",
              },
              duration: "PT8H50M",
              id: "1",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "KUL",
                terminal: "1",
                at: "2023-06-16T09:00:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2023-06-16T10:15:00",
              },
              carrierCode: "MH",
              number: "784",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MH",
              },
              duration: "PT2H15M",
              id: "2",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
        {
          duration: "PT18H15M",
          segments: [
            {
              departure: {
                iataCode: "SYD",
                terminal: "1",
                at: "2023-06-29T22:10:00",
              },
              arrival: {
                iataCode: "KUL",
                terminal: "1",
                at: "2023-06-30T05:00:00",
              },
              carrierCode: "MH",
              number: "140",
              aircraft: {
                code: "333",
              },
              operating: {
                carrierCode: "MH",
              },
              duration: "PT8H50M",
              id: "3",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
            {
              departure: {
                iataCode: "KUL",
                terminal: "1",
                at: "2023-06-30T12:10:00",
              },
              arrival: {
                iataCode: "BKK",
                at: "2023-06-30T13:25:00",
              },
              carrierCode: "MH",
              number: "788",
              aircraft: {
                code: "738",
              },
              operating: {
                carrierCode: "MH",
              },
              duration: "PT2H15M",
              id: "4",
              numberOfStops: 0,
              blacklistedInEU: false,
            },
          ],
        },
      ],
      price: {
        currency: "USD",
        total: "11440.00",
        base: "10572.00",
        fees: [
          {
            amount: "0.00",
            type: "SUPPLIER",
          },
          {
            amount: "0.00",
            type: "TICKETING",
          },
        ],
        grandTotal: "11440.00",
      },
      pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: false,
      },
      validatingAirlineCodes: ["MH"],
      travelerPricings: [
        {
          travelerId: "1",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "USD",
            total: "1658.00",
            base: "1509.00",
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
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "2",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "USD",
            total: "1658.00",
            base: "1509.00",
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
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "3",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "USD",
            total: "1658.00",
            base: "1509.00",
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
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "4",
          fareOption: "STANDARD",
          travelerType: "ADULT",
          price: {
            currency: "USD",
            total: "1658.00",
            base: "1509.00",
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
                weightUnit: "KG",
              },
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAU",
              brandedFare: "FLEX",
              class: "M",
              includedCheckedBags: {
                weight: 35,
                weightUnit: "KG",
              },
            },
          ],
        },
        {
          travelerId: "5",
          fareOption: "STANDARD",
          travelerType: "CHILD",
          price: {
            currency: "USD",
            total: "1202.00",
            base: "1134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
          ],
        },
        {
          travelerId: "6",
          fareOption: "STANDARD",
          travelerType: "CHILD",
          price: {
            currency: "USD",
            total: "1202.00",
            base: "1134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
          ],
        },
        {
          travelerId: "7",
          fareOption: "STANDARD",
          travelerType: "CHILD",
          price: {
            currency: "USD",
            total: "1202.00",
            base: "1134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
          ],
        },
        {
          travelerId: "8",
          fareOption: "STANDARD",
          travelerType: "SEATED_INFANT",
          price: {
            currency: "USD",
            total: "1202.00",
            base: "1134.00",
          },
          fareDetailsBySegment: [
            {
              segmentId: "1",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "2",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "3",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
            {
              segmentId: "4",
              cabin: "ECONOMY",
              fareBasis: "MFLOWAUCH",
              brandedFare: "FLEX",
              class: "M",
            },
          ],
        },
      ],
    },
  ],
  dictionaries: {
    locations: {
      KUL: {
        cityCode: "KUL",
        countryCode: "MY",
      },
      BKK: {
        cityCode: "BKK",
        countryCode: "TH",
      },
      SYD: {
        cityCode: "SYD",
        countryCode: "AU",
      },
    },
    aircraft: {
      333: "AIRBUS A330-300",
      738: "BOEING 737-800",
      788: "BOEING 787-8",
    },
    currencies: {
      USD: "US DOLLAR",
    },
    carriers: {
      TG: "THAI AIRWAYS INTERNATIONAL",
      MH: "MALAYSIA AIRLINES",
    },
  },
};

const hotelResponse = {
  type: "hotel-offers",
  hotel: {
    type: "hotel",
    hotelId: "MCLONGHM",
    chainCode: "MC",
    dupeId: "700031300",
    name: "JW Marriott Grosvenor House London",
    cityCode: "LON",
    latitude: 51.50988,
    longitude: -0.15509,
  },
  available: true,
  offers: [
    {
      id: "Y492YZ9XSM",
      roomQuantity: "2",
      checkInDate: "2023-06-15",
      checkOutDate: "2023-06-26",
      rateCode: "UK8",
      rateFamilyEstimated: { code: "PRO", type: "P" },
      room: {
        type: "UKE",
        typeEstimated: {
          category: "SUPERIOR_ROOM",
          beds: 1,
          bedType: "KING",
        },
        description: {
          text:
            "Stay Longer On Us, Save 15% or more when you stay longer\nSuperior King Room, 1 King,\n23sqm/247sqft-35sqm/377sqft, Wireless",
          lang: "EN",
        },
      },
      guests: { adults: 3 },
      price: {
        currency: "GBP",
        base: "6326.25",
        total: "6326.25",
        variations: {
          average: { base: "575.11" },
          changes: [
            {
              startDate: "2023-06-15",
              endDate: "2023-06-16",
              total: "656.25",
            },
            {
              startDate: "2023-06-16",
              endDate: "2023-06-17",
              total: "476.25",
            },
            {
              startDate: "2023-06-17",
              endDate: "2023-06-18",
              total: "491.25",
            },
            {
              startDate: "2023-06-18",
              endDate: "2023-06-19",
              total: "431.25",
            },
            {
              startDate: "2023-06-19",
              endDate: "2023-06-20",
              total: "573.75",
            },
            {
              startDate: "2023-06-20",
              endDate: "2023-06-21",
              total: "641.25",
            },
            {
              startDate: "2023-06-21",
              endDate: "2023-06-22",
              total: "648.75",
            },
            {
              startDate: "2023-06-22",
              endDate: "2023-06-23",
              total: "641.25",
            },
            {
              startDate: "2023-06-23",
              endDate: "2023-06-24",
              total: "566.25",
            },
            {
              startDate: "2023-06-24",
              endDate: "2023-06-25",
              total: "618.75",
            },
            {
              startDate: "2023-06-25",
              endDate: "2023-06-26",
              total: "581.25",
            },
          ],
        },
      },
      policies: {
        cancellations: [
          { amount: "1312.50", deadline: "2023-06-14T23:59:00+01:00" },
        ],
        paymentType: "guarantee",
      },
      self: "https://test.api.amadeus.com/v3/shopping/hotel-offers/Y492YZ9XSM",
    },
  ],
  self:
    "https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM&adults=3&checkInDate=2023-06-15&checkOutDate=2023-06-26&roomQuantity=2",
};
