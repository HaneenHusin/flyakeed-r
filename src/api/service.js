
import axios from "axios";



async function getToken() {
  const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
    grant_type: 'client_credentials',
    client_id: 'a9IsGFAvIRcvQQcpR7fyzf6XGrXm7hhd',
    client_secret: 'ose0CaCYlsKHCn7g',
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return response.data.access_token;
};

export async function searchFlightOffers(departureDate, returnDate, numAdults, numChildren, numInfants, travelClass, tripType, cabinClass) {
  try {
    const accessToken = await getToken();
     debugger
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken}`,
    };

    const params = {
      "currencyCode": "USD",
      "originDestinations": [
        {
          "id": "1",
          "originLocationCode": "NYC",
          "destinationLocationCode": "MAD",
          "departureDateTimeRange": {
            "date": "2023-11-01",
            "time": "10:00:00"
          }
        }
      ],
      "travelers": [
        {
          "id": "1",
          "travelerType": "ADULT"
        }
      ],
      "sources": [
        "GDS"
      ],
      "searchCriteria": {
        "maxFlightOffers": 2,
        "flightFilters": {
          "cabinRestrictions": [
            {
              "cabin": "BUSINESS",
              "coverage": "MOST_SEGMENTS",
              "originDestinationIds": [
                "1"
              ]
            }
          ]
        }
      }
    }

    const response = await axios.post('https://test.api.amadeus.com/v2/shopping/flight-offers', params, {headers});

    console.log("resssss", response.data);
  } catch (error) {
    console.error(error);
  }
};



function convertToKeyValue(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        acc[key] = value.map(convertToKeyValue);
      } else {
        acc[key] = convertToKeyValue(value);
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

export async function search(
    url,
    params,
) {
  try {
    debugger;
    console.log(params);
    const accessToken = await getToken();
    console.log("accessToken",accessToken);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };
    const response = await axios.post( `https://test.api.amadeus.com/${url}`,convertToKeyValue (params), {headers});

    console.log("resssss", response.data);
  } catch (error) {
    console.error(error);
  }


}

