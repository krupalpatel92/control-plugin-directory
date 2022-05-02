import { createReducer } from '@reduxjs/toolkit';
import { setNavigationItems, setDisableAllPlugin } from './actions';
import { INavigationBarItem } from 'components/functional/NavigationBar/types';

export type globalState = {
	navigationItems: INavigationBarItem[];
	isAllPluginEnabled: boolean;
};

export const initialState: globalState = {
	navigationItems: [],
	isAllPluginEnabled: true,
};

export const globalReducer = createReducer(initialState, builder => {
	builder.addCase(setNavigationItems, (state, action) => {
		state.navigationItems = action.payload.items;
	});
	builder.addCase(setDisableAllPlugin, (state, action) => {
		state.isAllPluginEnabled = action.payload;
	});
});
