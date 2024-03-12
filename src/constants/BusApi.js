import axios from 'axios';
import * as apiService from './ApiHelper';
import {StoreDataKeys} from './Constants';
import {getLocalStoreData} from './Utility';

let baseUrl = 'http://parents.cooledsys.com:';

export const getRouteDtls = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8280/pa/tpt/route_info`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              // body: payload,
            },
          );

          const json = await response.json();
          console.log("json ............. getRoutDetails:" + JSON.stringify(json))

          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};

export const getRouteStops = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8280/pa/tpt/stop/list`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );

          const json = await response.json();
          // console.log("getRouteStops json = " + JSON.stringify(json));
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};

export const getArrivalMins = async (isToggled) => {
console.log("getArriveMins... "+isToggled)
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          console.log( `${baseUrl}8280/pa/tpt/arrive_mins?flgMorningEvening=${isToggled}`)
          const response = await fetch(
            `${baseUrl}8280/pa/tpt/arrive_mins?flgMorningEvening=${isToggled}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
            },
          );

          const json = await response.json();
          console.log("get Arrival Mins json:"+ JSON.stringify(json))
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};

export const getCurrentLocation = async (payLoad) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8280/pa/tpt/current_location`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                tokenid: token,
              },
              body:payLoad
            },
          );

          const json = await response.json();
          console.log("getCurrentLocation json="+JSON.stringify(json));
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};
