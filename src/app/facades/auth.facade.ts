import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loginAction,
  loginErrorAction,
} from '../domain/store/auth/auth.actions';
import { AuthState } from '../domain/store/auth/auth.state';
import * as authSelectors from '../domain/store/auth/auth.selectors';
import { ILogin } from '../core/models/auth.model';
import { RootState } from '../domain/store';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  isLoading$: Observable<boolean>;
  isError$: Observable<string | null>;

  constructor(
    private readonly _store: Store<RootState>,
    private _storee: Store
  ) {
    this.isLoading$ = this._store.select(authSelectors.selectIsLoadingLogin);
    this.isError$ = this._store.select(authSelectors.selectIsErrorLogin);
  }

  login(data: ILogin) {
    this._store.dispatch(loginAction({ data }));
  }
  setErrorLogin(message: string) {
    this._store.dispatch(loginErrorAction({ message }));
  }
}
