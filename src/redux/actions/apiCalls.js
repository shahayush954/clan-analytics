import {
  API_KEY_TOKEN,
  API_BASE_URL,
  SET_CLAN_DATA,
  SET_ALL_PLAYER_DATA
} from "../types";
import axios from "axios";

const headerConfig = {
  authorization: `Bearer ${API_KEY_TOKEN}`
}

export const fetchClanData = (clanTag) => (dispatch) => {
  const url = `${API_BASE_URL}clans/${encodeURIComponent(clanTag)}`;
  return axios.get(url, headerConfig)
  .then(response => {
    dispatch({
      type: SET_CLAN_DATA,
      clanData: response.data
    });
    const playerTagArray = []
    response.data.memberList.forEach(eachMember => {
      playerTagArray.push(eachMember.tag);
    });
    return dispatch(fetchAllClanPlayers(playerTagArray))
  })
  .then(() => {
    
  })
  .catch(error => {
    console.log(error);
  });
}

export const fetchAllClanPlayers = (playerTagArray) => (dispatch) => {
  const promiseArray = playerTagArray.map(playerTag => {
    return fetchPlayerDetails(playerTag);
  })
  return Promise.all(promiseArray)
    .then(response => {
      const playerData = response.map(eachResponse => {
        return eachResponse.data;
      });
      dispatch({
        type: SET_ALL_PLAYER_DATA,
        allPlayerData: playerData
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export const fetchPlayerDetails = (playerTag) => {
  const url = `${API_BASE_URL}players/${encodeURIComponent(playerTag)}`;
  return axios.get(url, headerConfig);
}