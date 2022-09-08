import { DATA_STORE } from "./ActionType";

const initState = {
    cars: [],
    token : false,
    search : null,
};
export const dataStoreReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case DATA_STORE:
            return {...state, cars : payload};
        case "SEARCH":
            return {...state, search : payload};
        case "TOKEN_STATUS":
            return {...state, token : true};
        default:
            return state;
    }
};