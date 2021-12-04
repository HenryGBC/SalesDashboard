import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IUserResponse } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(data: ILogin): Observable<IUserResponse> {
    console.log(data);
    return this._http.post<IUserResponse>('auth/local', data);
  }
}
