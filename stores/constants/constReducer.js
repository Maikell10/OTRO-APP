import * as constActionTypes from "./constActions";

const initialState = {
    user: "",
};

const constReducer = (state = initialState, action) => {
    switch (action.type) {
        case constActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default constReducer;
