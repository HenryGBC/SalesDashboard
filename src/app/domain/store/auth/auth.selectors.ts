import { createSelector } from '@ngrx/store';
import { RootState } from '..';
import { AuthState } from './auth.state';

export interface AuthFeatureState {
  feature: AuthState;
}

export const selectAuthFeatureState = (state: RootState) => state.auth;

export const selectIsLoadingLogin = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isLoading
);
export const selectIsErrorLogin = createSelector(
  selectAuthFeatureState,
  (state: AuthState) => state.isError
);
