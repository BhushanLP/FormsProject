import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  users: any[];
}

export const selectUserState =
  createFeatureSelector<any>('users');

export const selectUsers =
  createSelector(
    selectUserState,
    state => state.users
  );