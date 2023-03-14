import { ActionTypes } from "../constant/Action-Types";
const initialState =
{
    darkMode: false,
    Products: [],
    featureProducts: [],
    singleProduct:{},
};

export const ToggleReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_TOGGLE:
            return {
                darkMode: !state.darkMode
            }
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
            };
        case ActionTypes.SET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.payload
            }
            case ActionTypes.SET_SEARCH:
                return {
                    ...state,
                    singleProduct: action.payload
                }
        default:
            return state;
    }

}
