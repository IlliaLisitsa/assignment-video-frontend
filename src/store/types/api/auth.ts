import { IViewer } from '../viewer/interfaces';

export interface LoginResponse {
  profile: IViewer;
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RefreshTokenResponse extends LoginResponse {}

export interface RefreshTokenRequest {
  refreshToken: string;
}
