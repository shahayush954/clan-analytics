const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");
const cors = require("cors");

const API_BASE_URL = "https://api.clashofclans.com/v1/";
const API_KEY_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjJmODdmMGU2LTI0ZTktNDg3MS1hZGY3LTY4NWQ5NmJlOWJlOCIsImlhdCI6MTY0MDMzODk3MCwic3ViIjoiZGV2ZWxvcGVyLzQ5YTkyMTk3LWY2YTEtZmVhZC1mYzA5LWJkMDZjZWU3YzM5YiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1MC4xMDcuMjcuMTMzIl0sInR5cGUiOiJjbGllbnQifV19.gHonEWOIK0vXSgX2lxYjCkUwpRhSal8qcOvXD9K_v8jNkoT5TSNFsyRmDqWRti1zbqA0wDrrMt0gxRp5cSIsNQ";

const headerConfig = {
  authorization: `Bearer ${API_KEY_TOKEN}`
};

const app = express();

app.use(bodyParser.raw());
app.use(cors());

app.get('/clans/:clanId', function(req, res) {
  const clanId = req.params.clanId.substring(1);
  const url = `${API_BASE_URL}clans/%23${clanId}`;
  request({
    headers: headerConfig,
    uri: url
  }).pipe(res);
});

app.get('/players/:playerId', function(req, res) {
  const playerId = req.params.playerId.substring(1);
  const url = `${API_BASE_URL}players/%23${playerId}`;
  request({
    headers: headerConfig,
    uri: url
  }).pipe(res);
});

app.listen(4400, () => {
  console.log("Server Listnening on Port 4400");
});
