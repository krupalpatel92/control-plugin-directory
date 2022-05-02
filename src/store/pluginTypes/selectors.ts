import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const pluginTypes = (state: RootState) => state.pluginTypes;

export const pluginTypesSelector = createSelector(pluginTypes, state => state);
