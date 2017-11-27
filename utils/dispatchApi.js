const api = "http://localhost"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getDispatches = () =>  fetch(`${api}/PalmStopsJson.php`, { headers })
.then(res => res.json())
.then(posts => posts)

