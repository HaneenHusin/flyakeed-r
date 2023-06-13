
import axios from "axios";
import {getLocalStorage, setLocalStorage} from "./localStorage";



// var Amadeus = require('amadeus');
// var amadeus = new Amadeus({
//   clientId: 'a9IsGFAvIRcvQQcpR7fyzf6XGrXm7hhd',
//   clientSecret: 'ose0CaCYlsKHCn7g'
// });


// const clientId = 'YOUR_CLIENT_ID';
// const clientSecret = 'YOUR_CLIENT_SECRET';


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
  setLocalStorage('token', response.data.access_token);
  return response.data.access_token;
};

export async function searchFlightOffers(departureDate, returnDate, numAdults, numChildren, numInfants, travelClass, tripType, cabinClass) {
  try {
    const accessToken = await getLocalStorage('token');
     debugger
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ accessToken !=null? accessToken:await  getToken()}`,
    };

    const params = {
      'origin': origin,
      'departureDate': '2023-07-01,2023-07-31',
      'one-way': false,
      'duration': {
        'min': 2,
        'max': 7
      },
      'nonStop': false,
      'currency': 'USD',
      'originDestinations': [
        {
          'id': '1',
          'destinationLocationCode': 'PAR'
        },
        {
          'id': '2',
          'destinationLocationCode': 'LON'
        }
      ]
    };

    const response = await axios.post('https://test.api.amadeus.com/v2/shopping/flight-offers', params, {headers});

    console.log("resssss", response.data);
  } catch (error) {
    console.error(error);
  }
};
// async function postFun(data, endPoint) {
//   try {
//     debugger;
//     const response = await authApi.post(endPoint, data);
//     const handledResponse =  handleResponseFun(response);
//
//     if (data) {
//       return handledResponse;
//     }}
//   catch
//     (error)
//     {
//       handleFailedResponse(error);
//     }
//
// }
//
// async function getFun(endPoint) {
//   try {
//     const response = await authApi.get(endPoint);
//     const handledResponse =  handleResponseFun(response);
//     return handledResponse;
//   } catch (error) {
//     return handleFailedResponse(error);
//   }
// }
//
// export function handleResponseFun(response) {
//   switch (response.data.Code) {
//     case 200: {
// return true;
//     }
//
//   }
// }
//
// export function handleFailedResponse(error) {
//
//     switch (error.Code ) {
//       case 400: {
//         return false;
//       }
//
//   }
// }
