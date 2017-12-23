const api = "http://69.174.245.140"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = "PODME";

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getDispatches = () =>  {
      return fetch(`${api}/PalmStopsJson.php`, { headers })
              .then( (res) => { 
                console.log("RES", res);
                return res.json();
             }) 
             .then(data => {
               console.log("DATA", data)
               return data
              })
             .catch( (err) => {
                console.log("ERRa", err);
              
             });
            }