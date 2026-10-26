import {createReducer, on} from '@ngrx/store';
import {increment, decrement, loadUsers, loadUsersSuccess, loadUsersFailure} from './counter.action';  

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1)
);

// user.reducer.ts

export interface UserState {
  users: any[];
  loading: boolean;
}

export const initialState1: UserState = {
  users: [],
  loading: false
};

export const userReducer = createReducer(

  initialState1,

  on(loadUsers, state => ({
    ...state,
    loading: true
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),

  on(loadUsersFailure, state => ({
    ...state,
    loading: false
  }))
);