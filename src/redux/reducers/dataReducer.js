import {
  SET_CLAN_DATA,
  SET_ALL_PLAYER_DATA
} from "../types";

const initialState = {
  clanDataLoading: false,
  clanData: {},
  allPlayerData: []
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CLAN_DATA:
      return {
        ...state,
        clanData: action.clanData
      };

    case SET_ALL_PLAYER_DATA:
      return {
        ...state,
        allPlayerData: action.allPlayerData
      };

    default:
      return state;
  }
};