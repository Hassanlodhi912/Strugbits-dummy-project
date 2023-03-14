import { ActionTypes } from "../constant/Action-Types";


const initialState ={
    allProduct:[]
}

export const allProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_ALL_PRODUCT:
            return{
                ...state,

            }
    }
}