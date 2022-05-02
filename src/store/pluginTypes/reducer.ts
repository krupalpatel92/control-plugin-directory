import { createReducer } from '@reduxjs/toolkit';
import { setPluginTypes } from './actions';
import { pluginTypeItems } from './types';

export const initialState: { items: pluginTypeItems } = {
	items: {},
};

export const pluginTypesReducer = createReducer(initialState, builder => {
	builder.addCase(setPluginTypes, (state, action) => {
		state.items = action.payload.items;
	});
});
