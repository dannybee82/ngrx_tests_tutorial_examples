import { createReducer, on } from "@ngrx/store";
import { UserStateInterface } from "../interfaces/user-state.interface";
import * as UserActtions from '../actions/user.actions'

export const initialState: UserStateInterface = {
    isLoading: false,
    data: [],
    error: null
}

//Definition of Reducer = a function that changes the (application)-state.
export const userReducer = createReducer(
    initialState,
    on(UserActtions.getUsers, (state) => ({ ...state, isLoading: true })),
    on(UserActtions.getUsersSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.users
    })),
    on(UserActtions.getUsersFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    })),
);
