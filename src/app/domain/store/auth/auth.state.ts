import { ILogin } from 'src/app/core/models/auth.model';

export interface AuthState {
  loginData: ILogin | null;
  isLoading: boolean;
  isError: string | null;
}
