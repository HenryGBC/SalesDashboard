import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { HomeEffects } from './home/home.effects';
import { homeReducer } from './home/home.reducer';
import { HomeState } from './home/home.state';

export interface RootState {
  auth: AuthState;
  home: HomeState;
}

export const appReducer = {
  auth: authReducer,
  home: homeReducer,
};

export const appEffects = [AuthEffects, HomeEffects];
