import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IViewer } from '../types/viewer/interfaces';
import { resetAll, RootState } from '../index';

export interface IViewerState {
  viewer?: IViewer;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
}

const initialState: IViewerState = {
  viewer: undefined,
  isAuthenticated: false,
  accessToken: '',
  refreshToken: ''
};

export const viewer = createSlice({
  initialState,
  name: 'viewer',
  reducers: {
    setViewerWithTokens: (state, action: PayloadAction<{ viewer: IViewer; accessToken: string; refreshToken: string }>) => {
      state.viewer = action.payload.viewer;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    updateViewer: (state, action: PayloadAction<IViewer>) => {
      state.viewer = { ...state.viewer, ...action.payload };
    },
    removeViewer: (state) => {
      state.viewer = undefined;
      state.isAuthenticated = false;
      state.accessToken = '';
      state.refreshToken = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetAll, () => initialState);
  }
});

export default viewer.reducer;

export const { setViewerWithTokens } = viewer.actions;

export const selectAccessToken = (state: RootState): string => state.viewer.accessToken;
export const selectRefreshToken = (state: RootState): string => state.viewer.refreshToken;
export const selectViewer = (state: RootState): IViewer | undefined => state.viewer.viewer;
export const selectIsAuthenticated = (state: RootState): boolean => state.viewer.isAuthenticated;
