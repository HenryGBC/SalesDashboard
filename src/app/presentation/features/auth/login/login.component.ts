import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/core/models/auth.model';
import { AuthFacade } from 'src/app/facades/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loadingLogin$: Observable<boolean>;
  loginError$: Observable<string | null>;

  constructor(private _fb: FormBuilder, private _authFacade: AuthFacade) {
    this.loadingLogin$ = this._authFacade.isLoading$;
    this.loginError$ = this._authFacade.isError$;
    this.loginForm = this._initForm();
  }

  ngOnInit(): void {}

  onSubmitForm() {
    if (this.loginForm.invalid) {
      console.log('error');
      return;
    }
    const data: ILogin = { ...this.loginForm.value };
    this._authFacade.login(data);
  }

  private _initForm() {
    return this._fb.group({
      identifier: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: ['', Validators.required],
    });
  }
}
