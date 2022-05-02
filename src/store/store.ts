import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { globalReducer } from './global';
import { pluginTypesReducer } from './pluginTypes';

export const store = configureStore({
	reducer: {
		global: globalReducer,
		pluginTypes: pluginTypesReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
